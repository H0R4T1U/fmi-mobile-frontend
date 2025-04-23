import 'dotenv/config';

export default {
    expo: {
            scheme: "fmihub",
            name: "frontend_fmihub",
            slug: "frontend_fmihub",
            version: "1.0.0",
            newArchEnabled: false,
               android: {
               package: "com.anonymous.frontend_fmihub",
                   config: {
                       usesCleartextTraffic: true
                   },
               adaptiveIcon: {
                       backgroundColor: "#ffffff"
                   },
           },
       ios: {
               infoPlist: {
                       NSAppTransportSecurity: {
                               NSAllowsArbitraryLoads: true
                           }
                   }
           },
extra: {
    CLIENT_ID: process.env.CLIENT_ID,
        TENANT_ID: process.env.TENANT_ID,
        BACKEND: process.env.BACKEND
},
androidStatusBar: {
    barStyle: "light-content",
        backgroundColor: "#000000",
        hidden: false,
        translucent: false
},
},
android: {
    immersiveMode: false,
        intentFilters: [
        {
            action: "VIEW",
            data: [
                {
                    scheme: "fmihub",
                }
            ],
            category: ["BROWSABLE", "DEFAULT"]
        }
    ],
        adaptiveIcon: {
        backgroundColor: "#ffffff"
    },
    package: "com.anonymous.frontend_fmihub",
}
};