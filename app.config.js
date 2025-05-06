import 'dotenv/config';

export default {
    expo: {
        updates: {
            url: "https://u.expo.dev/b4994156-58a4-4e28-8330-844f45cf489e"
        },
            scheme: "fmihub",
            name: "frontend_fmihub",
            slug: "frontend_fmihub",
            owner: 'thomiir',
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
                   runtimeVersion: "1.0.0"
           },
       ios: {
               infoPlist: {
                       NSAppTransportSecurity: {
                               NSAllowsArbitraryLoads: true
                           }
                   }
           },
        web: {
                output: 'static'
        },
        runtimeVersion: {policy: "appVersion"},
extra: {
    CLIENT_ID: process.env.CLIENT_ID,
    TENANT_ID: process.env.TENANT_ID,
    BACKEND: process.env.BACKEND,
    SECRET_KEY:process.env.SECRET_KEY,
    PUBLIC_KEY:process.env.PUBLIC_KEY,
    eas: {
        projectId: "b4994156-58a4-4e28-8330-844f45cf489e"
    }
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