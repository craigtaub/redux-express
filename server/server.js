import Express from 'express';
import reducer from '../redux/reducer';
import createStore from '../redux/store';

const app = Express();
const port = 3000;

app.use('/built', Express.static('built'));

app.use(handleRender);

// We are going to fill these out in the sections to follow
function handleRender(req, res) {

    const store = createStore(reducer);
    const html = `<div>Well this is a coincidence ;)</div>`; //the react stuff

    const initialState = store.getState();

    res.send(renderFullPage(html, initialState));

}

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/built/bundle.js"></script>
      </body>
    </html>
    `;
}


const server = app.listen(port, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
