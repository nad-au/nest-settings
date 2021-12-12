Create Staic Web App

```
az staticwebapp create \
    --name nest-settings-app \
    --resource-group rg-nest-settings \
    --source https://github.com/$GITHUB_USER_NAME/nest-settings \
    --location "eastasia" \
    --branch main \
    --app-location "/app" \
    --output-location "dist"  \
    --login-with-github
```
