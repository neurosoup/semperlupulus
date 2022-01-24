@echo off
SET USER_POOL_ID="eu-west-3_4BfhfIxoo"
IF "%1"=="" (
    aws cognito-idp list-users --user-pool-id %USER_POOL_ID% --attributes-to-get "email" --limit 20 --profile semperlupulus
) ELSE (
    aws cognito-idp admin-delete-user --user-pool-id %USER_POOL_ID% --username %1 --profile semperlupulus
)