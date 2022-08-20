class EnvURLGetter{
    //Execute Your Tests on different environment using Environment Varialble in Cypress
    //Refer: https://dzone.com/articles/configure-cypress-tests-to-run-on-multiple-environments
    getBaseUrl(){
        let url = Cypress.env('ENV')
        if (url='qa'){
            return "https://www.founderandlightning.com";
        }
        else if (url='stg'){
            return "https://www.founderandlightning.com";
        }
        else if (url='prod'){
            return "https://www.founderandlightning.com";
        }
    }
}

// export default new EnvURLGetter
export default EnvURLGetter;