

TIMESTAMP=$(date +%s)

if [[ ! -e "~/opencc_backup" ]];
  mkdir ~/opencc_backup

cp -r ~/opencc.tech/server/dist/cdn/images ~/opencc_backup
cp -r ~/opencc.tech/server/docker/database/data
docker exec server_db_1 /usr/bin/mysqldump -u root --password=123 opencc > backup/backup_$TIMESTAMP.sql

