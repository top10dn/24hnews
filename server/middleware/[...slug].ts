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
        if(event.req.url.includes('40-design-ideas-for-double-height-space-to-wow-your-guests')){
            sendRedirect(event,"https://life.newcarsz.com/40-design-ideas-for-double-height-space-to-wow-your-guests/?utm_medium=House_Stories&utm_source=Hao_301");
        }
        else{
            sendRedirect(event,"https://24hnews.beauty"+event.req.url);
        }
        
    }
})