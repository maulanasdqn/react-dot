# React DOT

## Setup

Clone Project ini ( Direkomendasikan menggunakan SSH )

`git clone git@github.com:maulanasdqn/react-dot`

Anda perlu menginstall dulu NodeJS ( Direkomendasikan Versi LTS 16 )

Anda juga perlu menginstall yarn

`npm i -g yarn`

Pasang Dependency

`yarn install`

Setup ENV
rename .env.example menjadi .env
Karna disini saya menggunakan api dari rajaongkir maka pada bagian VITE_API_URL isi dengan https://api.rajaongkir.com
anda juga perlu memasukan Api Key dari rajaongkir ke dalam ENV VITE_API_KEY
`
VITE_API_URL="https://api.rajaongkir.com"
VITE_API_KEY="isi-api-key-anda-disini"
`
Jika anda Pengguna NixPKGS maka anda bisa melakukan setup menggunakan NixFlakes dan NixDIRENV

`direnv allow`

Jika anda Menggunakan Docker maka anda juga bisa merunning Program ini menggunakan Docker

`docker compose up`

