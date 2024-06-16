import Phaser from "phaser";

export const gameInfos = {
  title: 'Hello World!',
  version: '1.0.0 alpha',
  url: 'www.dsouza.dev.br'
}

const config = {
    type: Phaser.AUTO,
    width: 1366,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#ffffff',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    title: gameInfos.title,
    version: gameInfos.version,
    url: gameInfos.url,
    disableContextMenu: true,
    scene: []
};

export default new Phaser.Game(config);
