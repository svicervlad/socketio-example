FROM archlinux

RUN yes | pacman -Syu \
  nodejs \
  yarn \
  python \
  python-pip \
  python-virtualenv
