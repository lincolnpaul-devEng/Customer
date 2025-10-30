{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20,
    pkgs.jdk8,
    pkgs.maven
  ];
  idx.extensions = [
    "vscjava.vscode-java-pack"
  ];
  idx.previews = {
    previews = {
      web = {
        command = ["npm", "run", "dev", "--", "--port", "$PORT"];
        manager = "web";
      };
    };
  };
}
