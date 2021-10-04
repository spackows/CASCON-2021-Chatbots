

const AssistantV2 = require( "ibm-watson/assistant/v2" );
const { IamAuthenticator } = require( "ibm-watson/auth" );
const g_url    = process.env.URL;
const g_apikey = process.env.APIKEY;

const g_player_A_assistant_ID = process.env.ASSISTANTIDPLAYERA;
const g_player_A_assistant = new AssistantV2( { version: "2021-06-14",
                                                authenticator: new IamAuthenticator( { apikey: g_apikey } ),
                                                serviceUrl: g_url
                                               } );

const g_player_B_assistant_ID = process.env.ASSISTANTIDPLAYERB;
const g_player_B_assistant = new AssistantV2( { version: "2021-06-14",
                                                authenticator: new IamAuthenticator( { apikey: g_apikey } ),
                                                serviceUrl: g_url
                                              } );

var g_playerA = { "name"         : "[ Ice cream oracle ]",
                  "assistant_id" : g_player_A_assistant_ID, 
                  "assistant"    : g_player_A_assistant,
                  "session_id"   : ""
                };

var g_playerB = { "name"         : "[ Guesser ]",
                  "assistant_id" : g_player_B_assistant_ID, 
                  "assistant"    : g_player_B_assistant,
                  "session_id"   : ""
                };


var Sync = require('sync');
Sync( function()
{
    try
    {
        initPlayer.sync( null, g_playerA );
        initPlayer.sync( null, g_playerB );
        
        message.sync( null, g_playerB, "" );                 // Sending empty text causes the Welcome node to fire.
        var response = message.sync( null, g_playerA, "" );  // - Needed because in both chatbots the Welcome
                                                             //   node sets some context variables.
                                                             // - Save the reply from player A, because that starts 
                                                             //   the game, saying: "Try to guess!"
        var spacer = "";
        var input  = response;
        var player = g_playerA;
        console.log( "\n" );
        while( input )
        {
            console.log( spacer + player.name + "\n" + spacer + input + "\n" );
            
            player = ( g_playerB == player ) ? g_playerA : g_playerB;
            
            response = message.sync( null, player, input.replace( /\s+/g, " " ) );
            
            input = response;
            
            spacer = spacer ? "" : "\t\t\t";
        }

    }
    catch( e )
    {
        console.log( e );
    }
    
} );


function initPlayer( player, callback )
{
    player.assistant.createSession( { assistantId: player.assistant_id } )
    .then( response => 
    {
        //console.log( JSON.stringify( response.result, null, 3 ) );
        
        player.session_id = response.result.session_id;
        
        callback( "" );
        
    } )
    .catch( e => 
    {
        console.log( e );
        
        callback( e.message );
        
    } );
    
}


function message( player, txt, callback )
{
    player.assistant.message( { assistantId: player.assistant_id,
                                sessionId: player.session_id,
                                input: { "message_type" : "text",
                                         "text" : txt }
    } ).then( response => 
    {
        //console.log( JSON.stringify( response.result, null, 3 ) );
        
        if( response && response.result && response.result.output && response.result.output.generic && ( response.result.output.generic.length > 0 ) )
        {
            var txt = "";
            for( var i = 0; i < response.result.output.generic.length; i++ )
            {
                txt += response.result.output.generic[i].text + "\n";
            }
            
            callback( "", txt );
        }
        
        callback( "", "" );
        
    } )
    .catch( e => 
    {
        console.log( e );
        
        callback( e.message, "" );
        
    } );
    
}






