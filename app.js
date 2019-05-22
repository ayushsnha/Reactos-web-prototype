const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
var parse = require('parse-link-header');
const app=   express();
const PORT = process.env.PORT || 5000;
const rp = require('request-promise');
app.set('view engine','ejs');
const key=process.env.SECRET;

const path = require('path'); 



const dev = app.get('env')!=='production'

if(!dev){
  app.disable('x-powered-by')
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, 'client/build')));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
//   });
}




var repos = {
    uri: 'https://api.github.com/users/reactos/repos',
    resolveWithFullResponse: true,
    qs: {
        access_token: key, // -> uri + '?access_token=xxxxx%20xxxxx'
         per_page:12,
        sort:"name"
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};


app.get('/api/repos',(req,res)=>{
    // rp(repos)
    // .then(body=> {
    //     res.json(body)
    // })
    // .catch(function (err) {
    //     res.json({error:'oops...something went wrong'});
    // });
        
    rp(repos)
    .then(body=> {
        let link=body.headers.link
        let parsed = parse(link)
        let dataAndPage={
            page:{
                ...parsed
            },
            repo:body
        }
       
        res.json(dataAndPage)
    })
    .catch(function (err) {
        res.json({error:'oops...something went wrong'});
    });
});


// app.get('/api/repos/pages',(req,res)=>{
//     rp(repos)
//     .then(body=> {
//         let link=body.headers.link
//         repo=body;
//         var parsed = parse(link)
//         var Uparsed={
//             page:{
//                 ...parsed
//             },
//             repo:body
//         }
       
//         res.json(Uparsed)
//     })
//     .catch(function (err) {
//         res.json({error:'oops...something went wrong'});
//     });
        
// });
// app.get('/api/pages',(req,res)=>{
//     rp(repos)
//     .then(response=>{
//     let Link;
//     Link=response.headers.link
//     var parsed = parse(data);
//     res.json(parsed);
//     }).catch(function (err) {
//         res.json({error:'oops...something went wrong'});
//     });
// })



app.listen(PORT,()=>{
    console.log('server has started');
})