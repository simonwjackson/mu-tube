with import <nixpkgs> { };

let
  osShellHook =
    # @see: https://discourse.nixos.org/t/problems-with-cypress-and-workarounds/6836
    if system == "x86_64-linux" then
      ''
        export CYPRESS_INSTALL_BINARY=0
        export CYPRESS_RUN_BINARY=$(which Cypress)
      '' else
      ''
        # No exports needed
      '';

  # TODO: Refactor into another file
  # @see: https://discourse.nixos.org/t/problems-with-cypress-and-workarounds/6836
  osCypressInputs =
    if system == "x86_64-linux" then [
      cypress
      xorg.libXScrnSaver
      xorg.libXdamage
      xorg.libX11
      xorg.libxcb
      xorg.libXcomposite
      xorg.libXi
      xorg.libXext
      xorg.libXfixes
      xorg.libXcursor
      xorg.libXrender
      xorg.libXrandr
      mesa
      cups
      expat
      ffmpeg
      libdrm
      libxkbcommon
      at-spi2-atk
      at-spi2-core
      dbus
      gdk-pixbuf
      gtk3
      cairo
      pango
      xorg.xauth
      glib
      nspr
      atk
      nss
      gtk2
      alsaLib
      gnome2.GConf
      unzip
      (lib.getLib udev)
    ] else [
      # No imports needed
    ];

in
pkgs.mkShell {
  name = "dev";
  buildInputs = [
    nodejs-18_x
    yarn
    git
    youtube-dl
  ] ++ osCypressInputs;

  shellHook = ''
    export PATH+=$PATH:./node_modules/.bin

    ${osShellHook}

    yarn install
  '';
}

