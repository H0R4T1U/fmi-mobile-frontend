import 'dotenv/config'
export default {
    expo: {
        scheme: "fmihub",
        name: "frontend_fmihub",
        slug: "frontend_fmihub",
        version: "1.0.0",
        newArchEnabled: false,
        extra: {
            CLIENT_ID: process.env.CLIENT_ID,
            TENANT_ID: process.env.TENANT_ID,
        },
    },
    android: {
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
            "backgroundColor": "#ffffff"
        },
        package: "com.anonymous.frontend_fmihub"
    }
};
