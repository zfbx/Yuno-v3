const fetch = require('node-fetch');

exports.run = async (client, message, args) => {
    
    return message.channel.send('This command is a work in progress, check back later :)');

    // Storing it in a separate .graphql/.gql file is also possible
    var query = `
        query ($id: Int) { # Define which variables will be used in the query (id)
            Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
                id
                title {
                    romaji
                    english
                    native
                }
            }
        }
    `;

    // Define our query variables and values that will be used in the query request
    var variables = {
        id: 15125
    };

    var url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };
    // Make the HTTP Api request
    fetch(url, options).then(handleResponse).then(handleData).catch(handleError);

};

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    client.log.debug(data);
}

function handleError(error) {
    client.log.error(error);
}

//would return
/*
    "data": {
        "Media": {
            "id": 15125,
            "title": {
                "romaji": "Teekyuu",
                "english": null,
                "native": "てーきゅう"
            }
        }
      }
    }
*/


exports.info = {
    name: 'anime',
    aliases: [],
    usage: ["anime Boku no Hero Academia", "anime 10087"],
    module: "Search",
    nsfw: false,
    serverOnly: false,
    ownerOnly: false,
    requires: [],
    botPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES'],
    description: "[WIP] search for an anime by it's title or from it's ID on anilist.co and see it's information."
};
