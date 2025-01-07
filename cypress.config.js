const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,

  env: {
    test_url_trademark_bridge: "http://217.76.53.78:8111",
    prod_url_trademark_bridge: "https://www.trademarkbridge.com",

    test_url_trademark_registrars: "http://217.76.53.78:8040/",
    prod_url_trademark_registrars: "http://trademarkregistrars.com",

    test_url_trademark_bulls: "http://217.76.53.78:8041",
    prod_url_trademark_bulls: "http://trademarkbulls.com",

    test_url_trademark_proficiency: "http://217.76.53.78:8059",
    prod_url_trademark_proficiency: "https://trademarkproficiency.com",

    test_url_trademark_protege: "http://217.76.53.78:8066",
    prod_url_trademark_protege: "https://trademarkprotege.com",

    test_url_trademark_ipmenders: "http://217.76.53.78:8001",
    prod_url_trademark_ipmenders: "https://ipmenders.com",

    test_url_trademark_prodigy: "http://217.76.53.78:8013",
    prod_url_trademark_prodigy: "https://trademarkprodigy.com",

    test_url_trademark_formation: "http://217.76.53.78:8019",
    prod_url_trademark_formation: "https://trademarkformation.com",

    test_url_trademark_viser: "http://217.76.53.78:8031",
      prod_url_trademark_viser: "https://trademarkviser.com",

    test_url_legacy_trademark: "http://217.76.53.78:8011",
    prod_url_legacy_trademark: "https://legacytrademark.com",

    test_url_imperial_trademark: "http://217.76.53.78:8012",
    
    prod_url_imperial_trademark: "https://imperialtrademark.com",

    //test_url_trademark_intellectuals: "http://

    prod_url_trademark_intellectuals: "https://TrademarkIntellectuals.com",

    test_url_ipexperts_usa: "http://217.76.53.78:8088",
    prod_url_ipexperts_usa: "https://ipexpertusa.com",

    test_url_ipmasters_usa: "http://217.76.53.78:8091",
    prod_url_ipmasters_usa: "https:// ipmastersusa.com",

    test_url_tmregistration_hub: "http://217.76.53.78:8090",
    prod_url_tmregistration_hub: "https://tmregistrationhub.com",

    test_url_trademark_registry_experts: "http://217.76.53.78:8102",

    prod_url_trademark_registry_experts: "https://trademarkregistryexperts.com",

    prod_url_usa_trademark_consultants: "https://ustrademarkconsultants.com",

    prod_url_logo_indigo: "https://logoindigo.com",

    prod_url_trademark_verticals: "https://trademarkverticals.com",

    prod_url_tm_registration_usa: "https://tmregistrationusa.com",

    prod_url_trademarknest: "https://trademarknest.com",

    prod_url_trademark_secret: "https://trademarksecret.com",

    prod_url_trademark_unit: "https://trademarkunit.com",

    prod_url_file_us_trademark: "https://fileustrademark.com",

    prod_url_world_trademark_registratoin: "https://worldtrademarkregistration.com",

    prod_url_express_trademark_pro: "https://expresstrademarkpro.com",

    prod_url_trademark_rise: "https://trademarkrise.com",

    prod_url_trademark_assistance: "https://www.trademarkassistance.co.uk",

    prod_url_secure_trademark_usa: "https://www.securetrademarkusa.com",

    prod_url_us_trademark_reg: "https://www.ustrademarkreg.com",

    prod_url_ghost_book_hub: "https://www.ghostbookhub.com",

    prod_url_ghost_book_hub_co: "https://www.ghostbookhub.co.uk",

    prod_url_animixie: "https://www.animixie.com",

    prod_url_cmcllp: "https://www.cmcllp.org",

    prod_url_traveltouriz: "https://www.traveltouriz.com",

    prod_url_umrahtravelz: "https://www.umrahtravelz.com",

    prod_url_trademark_grid: "https://www.trademarkgrid.com",

    prod_url_usa_trademark_protection: "https://usatrademarkprotection.com",

    prod_url_usa_trademark_jurist: "https://www.ustrademarkjurist.com",

    prod_url_world_educatoin: "https://worldeducation.us",

    prod_url_trademark_assurance: "https://trademarkassurance.com",

    prod_url_book_writing_house: "https://www.bookwritinghouse.com",

    prod_url_amz_professional_publisher: "https://amzprofessionalpublishers.com",

    prod_url_animation_express: "https://animationexpress.com",

    prod_url_ipprotection_hub: "https://www.ipprotectionhub.com",

    prod_url_swyft_ventures: "https://www.swyftventures.com",

    prod_url_us_trademark_legal: "https://ustrademarklegal.com",

    prod_url_usa_trademark_hub: "https://ustrademarkhub.com",

    prod_url_trademark_central_us: "https://trademarkcentralus.com",

    prod_url_usa_mark_expert: "https://usmarkexpert.com",

    prod_url_trademark_empower: "https://trademarkempower.com",

    prod_url_usa_legal_zoom: "https://uslegalzoom.com",

    prod_url_protect_your_tm: "https://protectyourtm.com",


    prod_url_elitetrademark_firm: "https://www.elitetrademarkfirm.com",

    prod_url_trademark_bridge: "https://www.trademarkbridge.com",

    prod_url_amz_publishers_networks: "https://www.amzpublishersnetwork.com",


    test_url_ipmasters_usa: "http://217.76.53.78:8091",

  

    

    /*test_url_usa_trademark_consultants: "http://217.76.53.78:8119",

    test_url_logo_indigo: "http://217.76.53.78:8129",

    test_url_trademark_verticals: "http://217.76.53.78:8065",

    test_url_tm_registration_usa: "http://217.76.53.78:8060",

    test_url_trademarknest: "http://217.76.53.78:8005",

    test_url_trademark_secret: "http://217.76.53.78:8020",

    test_url_trademark_unit: "http://217.76.53.78:8022",

    test_url_file_us_trademark: "http://217.76.53.78:8076",

    test_url_world_trademark_registratoin: "http://217.76.53.78:8078",

    test_url_express_trademark_pro: "http://217.76.53.78:8082",

    test_url_trademark_rise: "http://217.76.53.78:8083",

    test_url_trademark_assistance: "http://217.76.53.78:8121",

    test_url_secure_trademark_usa: "http://217.76.53.78:8046",

    test_url_us_trademark_reg: "http://217.76.53.78:8110",

    test_url_ghost_book_hub: "http://217.76.53.78:8098",

    test_url_ghost_book_hub_co: "http://217.76.53.78:8131",

    test_url_animixie: "http://217.76.53.78:8136",

    test_url_cmcllp: "http://217.76.53.78:8134",

    test_url_traveltouriz: "http://217.76.53.78:8136",

    test_url_umrahtravelz: "http://217.76.53.78:8137",

    test_url_trademark_grid: "http://217.76.53.78:8138",

    test_url_usa_trademark_protection: "http://217.76.53.78:8139",

    test_url_usa_trademark_jurist: "http://217.76.53.78:8140",

    test_url_world_educatoin: "http://217.76.53.78:8133",

    test_url_trademark_assurance: "http://217.76.53.78:8148",

    test_url_book_writing_house: "http://217.76.53.78:8149",

    test_url_amz_professional_publisher: "http://217.76.53.78:8135",

    test_url_animation_express: "http://217.76.53.78:8148",

    test_url_ipprotection_hub: "http://217.76.53.78:8149",

    test_url_swyft_ventures: "http://217.76.53.78:8135",

    test_url_us_trademark_legal: "http://217.76.53.78:8148",

    test_url_usa_trademark_hub: "http://217.76.53.78:8149",

    test_url_trademark_central_us: "http://217.76.53.78:8135",

    test_url_usa_mark_expert: "http://217.76.53.78:8148",

    test_url_trademark_empower: "http://217.76.53.78:8149",

    test_url_usa_legal_zoom: "http://217.76.53.78:8135",

    test_url_protect_your_tm: "http://217.76.53.78:8148",

    test_url_elitetrademark_firm: "http://217.76.53.78:8149",

    test_url_trademark_bridge: "http://217.76.53.78:8135",

    test_url_amz_publishers_networks: "http://217.76.53.78:8148",*/


  },

  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    defaultCommandTimeout: 5000,
    experimentalStudio: true,
    watchForFileChanges: false,
    //viewportWidth: 1366,
    //viewportHeight: 768,
    pageLoadTimeout: 15000,
    retries: {
      runMode: 3,   // Retries when running tests via `cypress run`
      openMode: 2,  // Retries when running tests via `cypress open`
    },
  }
});



