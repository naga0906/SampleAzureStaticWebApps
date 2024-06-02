/*
const { app } = require('@azure/functions');

app.http('httpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!` };
    }
});
*/

module.exports = async function (context) {
    context.res.json({
        time: get_time()
    });
};

function get_time(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    return (
        year + "/" + 
        month + "/" +
        date + " " +
        hour + ":" +
        minute
    );
}
