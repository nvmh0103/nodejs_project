class siteControllers{

    // get /home
    index(req,res){
        res.render('home')
    };
    // get /search
    search(req,res){
        res.render(search)
    };
    
}

module.exports=new siteControllers;