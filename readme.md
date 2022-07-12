- setup nginx
- - sudo ufw allow 'Nginx HTTP'
- - sudo ufw allow 'Nginx HTTPS'
- - sudo apt install certbot python3-certbot-nginx -y

- setup certbot
- - sudo certbot --nginx -d www.ezeugwagerrard.com -d www.ezeugwagerrard.com
- - sudo certbot --nginx -d api.ezeugwagerrard.com -d api.ezeugwagerrard.com

- setup nginx |

- setup nvm
- - curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
- - source ~/.profile   
- - nvm install 14.20.0
- - npm install --global yarn pm2@latest

- pull code
- - git clone https://github.com/GerrardE/portfolio_site.git && cd portfolio_site
- - yarn install:server && yarn install:client
- - client .env, server .env
- - yarn build:server
- - pm2 start npm --name server -- run start:server
- - yarn build:client
- - pm2 start npm --name client -- run start:client
