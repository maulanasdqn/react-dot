# React DOT

## Initial Setup

Clone Project ini ( Direkomendasikan menggunakan SSH )

> `git clone git@github.com:maulanasdqn/react-dot`

## Install NODEJS dan Yarn

Anda perlu menginstall dulu NodeJS dan Yarn ( Direkomendasikan menggunakan NodeJS Versi 16 )

> `npm i -g yarn`

## Install Dependency

Pasang Dependency

> `yarn install`

## Development With Nix

Pasang Nixpkgs

> `sh <(curl -L https://nixos.org/nix/install) --no-daemon`

Pasang nix-flakes

> `nix-env -iA nixpkgs.nixFlakes`

Setup nix-flakes\
Edit file yang ada di `~/.config/nix/nix.conf` atau `/etc/nix/nix.conf` dan tambahkan:

> `experimental-features = nix-command flakes`

Pasang nix-direnv

> `nix-env -f '<nixpkgs>' -iA nix-direnv`

Setup nix-direnv

> `source $HOME/.nix-profile/share/nix-direnv/direnvrc`

Setup nix-direnv

> `direnv allow`

Dan enjoy tinggal tunggu dependency terinstall dengan sendirinya

## Development with Docker

Pasang Docker bisa di unduh di https://docker.com

Setup Docker

> `docker compose up`

## Setup .env

_Rename_ **.env.example** menjadi **.env**\
Karena disini saya menggunakan api dari **votsu**\
Maka pada bagian `VITE_API_URL` isi dengan https://api-votsu.herokuapp.com

> **Note:** Jika menggunakan Nix maka **.env** sudah ter-setup dengan sendirinya
