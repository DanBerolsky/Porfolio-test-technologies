module.exports = {
    env: {
        "browser": true,
        "es2021": true,
        "node": true
    },
    extends: [
        "next"
    ]
    ,
    overrides: [
        {
            env: {
                "node": true
            },
            files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        "react"
    ],
    rules: {
        "@next/next/no-page-custom-font": "off",
        'react/react-in-jsx-scope': 'off',
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/no-unescaped-entities": "off",
    },
    settings: {
        next: {
            'rootDir': "packages/my-app/"
        }
    },
}
