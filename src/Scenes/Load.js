class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.load.setPath("./assets/");

        // Load characters spritesheet
        this.load.atlas('link_green_walk', 'link/LinkMove/LinkMove.png', 'link/LinkMove/LinkMove.json');
        this.load.atlas('link_green_item', 'link/LinkItem/LinkItem.png', 'link/LinkItem/LinkItem.json');
        this.load.image('link_green_pickup', 'link/LinkPickup/LinkPickup-0.png');
        this.load.atlas('armos_back', 'Armos/ArmosBack/ArmosBack.png', 'Armos/ArmosBack/ArmosBack.json');
        this.load.atlas('armos_front', 'Armos/ArmosFront/ArmosFront.png', 'Armos/ArmosFront/ArmosFront.json');
        this.load.atlas('leever', 'Leever/Leever.png', 'Leever/Leever.json');
        this.load.atlas('octo_front', 'Octo/OctoFront/OctoFront.png', 'Octo/OctoFront/OctoFront.json');
        this.load.atlas('octo_side', 'Octo/OctoSide/OctoSide.png', 'Octo/OctoSide/OctoSide.json');
        
        this.load.image("ice_wand_up", "small_assets/ice_wand_up.png");
        this.load.image("ice_wand_side", "small_assets/ice_wand_side.png");
        this.load.image("sword_up", "small_assets/sword_up.png");
        this.load.image("sword_side", "small_assets/sword_side.png");

        // Load tilemap information
        this.load.image("rock_packed", "Tiled/rock_packed.png");
        this.load.image("tilemap_packed_dung", "Tiled/tilemap_packed_dung.png");
        this.load.image("tilemap_packed_plat", "Tiled/tilemap_packed_plat.png");
        this.load.tilemapTiledJSON("HUD", "HUD.tmj"); 
        this.load.tilemapTiledJSON("Level1", "Level1.tmj");
        this.load.tilemapTiledJSON("Boss1", "Boss1.tmj");
    }

    create() {
        this.anims.create({
            key: 'player_walk',
            frames: this.anims.generateFrameNames('player_walk', {
                prefix: "Move-",
                start: 2,
                end: 3,
                suffix: ".png",
                zeroPad: 1
            }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'player_item',
            frames: this.anims.generateFrameNames('player_item', {
                prefix: "Item-",
                start: 1,
                end: 1,
                suffix: ".png",
                zeroPad: 1
            }),
            frameRate: 0,
            repeat: -1
        });

         // ...and pass to the next Scene
         this.scene.start("AdventureScene");
    }

    // Never get here since a new scene is started in create()
    update() {
    }
}