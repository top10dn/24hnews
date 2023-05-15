/* export default  (req, res, next) => {
    console.log(req.url);
    const headers = req.headers;
    res.redirect("https://ufo.nepalikhabar24hour.com"+req.url);
    if (headers.referer && /facebook\.com|twitter\.com|t\.co/gi.test(headers.referer)) {
        res.redirect("https://ufo.nepalikhabar24hour.com"+req.url);
    } else {
        next();
    }
};
 */
export default defineEventHandler((event) => {
    const headers = event.req.headers;
    if (headers.referer && /facebook\.com|twitter\.com|t\.co/gi.test(headers.referer)) {
        if(event.req.url.includes('35-creative-partition-ideas-to-replace-walls')){
            sendRedirect(event,"https://life.cinemaphilippines.com/35-creative-partition-ideas-to-replace-walls&utm_medium=House_Stories&utm_source=HTL_301");
        }
        else{
            sendRedirect(event,"https://24hnews.beauty"+event.req.url);
        }
        
    }
})