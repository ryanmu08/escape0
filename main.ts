enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy,
    sword
}
namespace SpriteKind {
    export const sword = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d b b d d d d d d d d d d d d 
d d d b d d d d d d d d d d d d 
d d d d d d d d d d b d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d b d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
. . . . . . . . . . . . . 7 . . 
. . . . 7 7 7 7 . . . . 7 7 . . 
. . . . 7 7 7 7 . . . . 7 7 . . 
. . . 7 7 7 7 7 . . . 7 7 7 7 . 
. . . 7 7 7 7 7 . . . 7 7 7 7 . 
. . . 7 7 7 7 7 . . . 7 7 7 7 7 
. . 7 7 7 7 7 7 . . 7 7 . 7 7 . 
. . 7 7 7 7 7 7 . . 7 7 7 7 7 . 
. . 7 7 7 7 7 7 . 7 7 7 7 7 7 . 
. . 7 7 7 7 7 7 . 7 7 7 7 7 7 . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
. . 7 7 7 7 7 7 7 7 7 7 7 . 7 . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
. . 7 7 7 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Enemy, myTiles.tile4, function (sprite, location) {
    resetSpriteSpeed(sprite)
    while (sprite.vx == 0 && sprite.vy == 0) {
        resetSpriteSpeed(sprite)
    }
})
function destroyAllEnemies () {
    for (let 值 of enemies) {
        值.destroy()
    }
}
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.floorLight5, function (sprite, location) {
    resetSpriteSpeed(sprite)
    while (sprite.vx == 0 && sprite.vy == 0) {
        resetSpriteSpeed(sprite)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.smiles, 500)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    if (level == 3) {
        effects.confetti.startScreenEffect()
        game.over(true)
    } else {
        destroyAllGem()
        destroyAllEnemies()
        level += 1
        setLevelMap(level)
    }
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.castle.tilePath1, function (sprite, location) {
    resetSpriteSpeed(sprite)
    while (sprite.vx == 0 && sprite.vy == 0) {
        resetSpriteSpeed(sprite)
    }
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.darkGroundNorthEast1, function (sprite, location) {
    resetSpriteSpeed(sprite)
    while (sprite.vx == 0 && sprite.vy == 0) {
        resetSpriteSpeed(sprite)
    }
})
scene.onHitWall(SpriteKind.Enemy, function (sprite) {
    resetSpriteSpeed(sprite)
    while (sprite.vx == 0 && sprite.vy == 0) {
        resetSpriteSpeed(sprite)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
})
function spawnSword (数字: number) {
    for (let index = 0; index < 数字; index++) {
        swordSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . c . . . . . . 
. c c c c c c c c c . . . . . . 
c d d d d d d d d c e e e e e . 
. c c c c c c c c c . . . . . . 
. . . . . . . . . c . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.sword)
        if (level == 0) {
            tiles.placeOnRandomTile(swordSprite, sprites.dungeon.chestClosed)
        } else if (level == 1) {
            tiles.placeOnRandomTile(swordSprite, sprites.dungeon.chestClosed)
        } else if (level == 2) {
            tiles.placeOnRandomTile(swordSprite, sprites.dungeon.chestClosed)
        } else {
            tiles.placeOnRandomTile(swordSprite, sprites.dungeon.chestClosed)
        }
    }
}
function setLevelMap (level: number) {
    if (level == 0) {
        game.showLongText("第一关", DialogLayout.Bottom)
        enemyNumber = 6
        gemNumber = 3
        levelTime = 12
        tiles.setTilemap(tiles.createTilemap(
            hex`10001000020f0c0c0c0c0c0c0c0c0c0c0c0c0c0c0201090909090909090909091a0c0c0c020305050505050505050a0a070c0c0c020316160b0b0b0b0b0b030a070c0c0c020316160c0c0c020c0c030a070c0c0c0203090909080c0c0c0c030a070c0c0c02030a050a070c0c0c0c030a070c0c0c0203071603070c0c0c0c030a070c0c0c020307160307020c0c0c030a0a0c0c0c0203071603070c0c01090a0a0a080c0c02030a090a070c0c030a05050a070c0c0c0405050a070c0c03070c0c03070c0c0c0c0c0c030a09090a070c0c03070c0c0c0c0c0c030a050505060c0c03070c0c0c0c0c0c03070c0c0c0c0c0c03070c0c0c0c0c0c04060c0c0c0c0c0c030a100c`,
            img`
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 . . . . . . . . . . . . 2 . . 
2 . . . . . . . . . . . . 2 . . 
2 . 2 2 2 2 2 2 2 2 . . . 2 . . 
2 . 2 2 2 2 2 . . 2 . . . 2 . . 
2 . . . . . 2 . . 2 . . . 2 . . 
2 . . . . . 2 . . 2 . . . 2 . . 
2 . . 2 . . 2 . . 2 . . . 2 . . 
2 . . 2 . . 2 . 2 2 . . . 2 2 . 
2 . . 2 . . 2 2 . . . . . . 2 . 
2 . . . . . 2 2 . . . . . . 2 . 
2 . . . . . 2 2 . . 2 2 . . 2 . 
2 2 2 2 . . . . . . 2 2 . . 2 . 
. . . 2 . . . . . . 2 2 . . 2 . 
. . . 2 . . 2 2 2 2 2 2 . . 2 . 
. . . 2 . . 2 . . . . 2 . . . 2 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.castle.tileGrass2,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.dungeon.stairNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.stairLadder,sprites.dungeon.stairLarge,sprites.builtin.forestTiles20,sprites.builtin.forestTiles24,sprites.builtin.forestTiles27,sprites.builtin.forestTiles11,sprites.builtin.forestTiles7,sprites.builtin.forestTiles0,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.dungeon.chestClosed],
            TileScale.Sixteen
        ))
    } else if (level == 1) {
        game.showLongText("第二关", DialogLayout.Bottom)
        enemyNumber = 9
        gemNumber = 6
        levelTime = 25
        tiles.setTilemap(tiles.createTilemap(
            hex`14001400171717161616171717171717171717171717171717171717171717171c09090909090909081717171717171717171717030a0a0a0a0a0a0a071717171717171717171717030a0a171717170a071717171801091017171717030a0a171717170a0717171717030a0717171717030a0a171717170a0717171717030a0717171717030a0a171717170a0717171717030a0717171717030a0a090909090a0717171717030a0717171717030a07161616160a0717171717030a0a090909090a0a07161616160a0717171717030a0a0a0a0a0a0a0a0717181717030a09090817030a0a0a0a050505050617171718030a0a0a07161616160a071717171717171717171616160a07161616160a07171717171718171717030a0a0a07161616160a07171717171717171717030a050506171616160a07171717171717171717030717171717171616160a0909090909090909090a07171717171716161605050505050505050a0a0a0717171717171716161717171717171717040519061717171717171616171717171717171717170f17171717`,
            img`
. . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . 2 . . . . . . . . . 2 . . 
. . . . . . . 2 . . . . . . . . . 2 . . 
2 2 2 2 2 . . 2 . . . 2 2 2 2 . . 2 . . 
2 . . . 2 . . 2 . . . 2 . . 2 . . 2 . . 
2 . . . 2 . . 2 . . . 2 . . 2 . . 2 . . 
2 . . . 2 . . 2 . . . 2 2 2 2 . . 2 . . 
2 . . . 2 . . 2 . . . . . . . . . 2 . . 
2 . . . 2 2 2 2 . . . 2 2 2 2 . . 2 . . 
2 . . . . . . . . . . 2 2 2 2 . . 2 2 2 
2 . . . . . . . . . . 2 . . 2 . . . . . 
2 . . . . . . . . . . 2 . . 2 . . . . . 
2 2 2 2 . . 2 2 2 2 2 2 . . 2 2 2 2 . . 
. . 2 2 . . 2 . . . . . . . 2 . . . . . 
. . . 2 . . 2 . . . . . . . 2 . . . . . 
. . . 2 . . 2 2 2 2 2 2 2 2 2 . . 2 2 2 
. . . 2 2 . . . . . . . . . . . . 2 . . 
. . . . 2 . . . . . . . . . . . . 2 . . 
. . . . 2 2 2 2 2 2 2 2 2 . . . . 2 . . 
. . . . 2 2 . . . . . . 2 2 2 . 2 2 . . 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.castle.tileGrass2,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.dungeon.stairNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.stairLadder,sprites.dungeon.stairLarge,sprites.builtin.forestTiles20,sprites.builtin.forestTiles24,sprites.builtin.forestTiles27,sprites.builtin.forestTiles11,sprites.builtin.forestTiles7,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.dungeon.chestClosed],
            TileScale.Sixteen
        ))
    } else if (level == 2) {
        game.showLongText("第三关", DialogLayout.Bottom)
        enemyNumber = 12
        gemNumber = 9
        levelTime = 50
        tiles.setTilemap(tiles.createTilemap(
            hex`19001900171717171717171717171717171717171717171717171717171b1818181818181818181818181818181818181818181817171718181818181818181818181818181818181818181818171717182323181818181817171717181f1f1f1f1f1f181818171c1718230f1717171717171b1717181f1f1f1f1f1f181818171c171823171a1a17171717171717181f1f1f1f1f1f181818171c1a1823171a1a17181818181818181f1f1f1f1f1f181818171c1a1717171a1a17181818181818181818181818181818181717171717171a1a171818181818181818181818181818181817171717171a1a1a1718181c1717181818181818181818181817171717171a1a1a1718181c1b171818171b1717181c1c1c1c17171718181818181818181c1917181817171b17181c1c1c1c17171718181818181818181c19171818181818181818181817171717181818171717171717171717171818181818171818171717171818181717171717171818101717171718181718181824171718181817181818181818181819171717181817181818181717181818171818181818181818191717171818171818171717171818181718181717171e1e1e1717171718181718181a171717171818171818171e171e1e1e1e1e171718181718181717171a171818171818181818181818181818181818171818171a171a1718181718181818181818181818181818181718181717171e1718181717171717171717171717171717171718181717171e171818181818181818181818181818181818181818171a171e1718181818181818181818181818181818181818181717171e171717171717171717171717171717171717171717171717`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . . . . . . . . . . 2 2 
2 . . . . . . . . 2 2 2 2 . 2 2 2 2 2 2 . . . 2 2 
2 . . . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 . . . 2 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 . . . 2 2 
2 . . 2 2 2 2 . . . . . . . 2 2 2 2 2 2 . . . 2 2 
2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 . . 2 2 2 . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 . . 2 2 2 . . 2 2 2 2 . 2 2 2 2 2 2 
2 . . . . . . . . 2 2 2 . . 2 2 2 2 . 2 2 2 2 2 2 
2 . . . . . . . . 2 2 2 . . . . . . . . . . 2 2 2 
2 . . . 2 2 2 2 2 2 2 2 2 2 . . . . . 2 . . 2 2 2 
2 . . . 2 2 2 2 2 2 . . . 2 2 2 2 . . 2 . . . . 2 
2 . . . 2 . . . . . . . . 2 2 2 2 . . 2 . . . . 2 
2 . . . 2 . . . . . . . . 2 2 2 2 . . 2 . . 2 2 2 
2 . . . 2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 . . 2 2 2 
2 2 . . 2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 . . 2 2 2 
2 2 . . 2 . . . . . . . . . . . . . . 2 . . 2 2 2 
2 2 . . 2 . . . . . . . . . . . . . . 2 . . 2 2 2 
2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.castle.tileGrass2,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.dungeon.stairNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.stairLadder,sprites.dungeon.stairLarge,sprites.builtin.forestTiles20,sprites.builtin.forestTiles24,sprites.builtin.forestTiles27,sprites.builtin.forestTiles11,sprites.builtin.forestTiles7,sprites.builtin.forestTiles0,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight5,sprites.dungeon.floorLight3,sprites.dungeon.floorLight4,sprites.dungeon.greenOuterEast2,sprites.dungeon.floorLight1,sprites.dungeon.floorLight2,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.chestClosed],
            TileScale.Sixteen
        ))
    } else {
        game.showLongText("第四关", DialogLayout.Bottom)
        enemyNumber = 15
        gemNumber = 12
        levelTime = 80
        tiles.setTilemap(tiles.createTilemap(
            hex`24002400222222222222222222222222222222222222222222222222222222222222222222222222221414141414141414141414141414141414141414141414141414141414141414141422221414141414141414141414141414141414141414141414141414141414141414141422221414141414141414141414141414141414141414141414141414141414141414141422221414141414141414141414141414141414141414141414141414141414141414141422221414141422141422222222222222222222222222222222222222222222221414141422221414141422141414141414141414141414141414141414141414141414221414141422221414141422141414141414141414141414141414141414141414141414221414141422221414141422141414141414141414141414141414141414141414141414221414141422221414141422141414222222222222222222222222222222222222141414221414141422221414141422141414221414141414141414141414141414141422141414221414141422221414141422141414221414141414141414141414141414141422141414221414141422221414141422141414221414221414222222222222222222141422141414221414141422221414141422141414221414221414141414141414141422141422141414221414141422221414141422141414221414221414141414141414141422141422141414221414141422221414141422141414221414221414222222222222141422141422141414221414141422221414141422141414221414221414221414141422141422141422141414221414141422221414141422141414221414221414221418141422141422141422141414221414141422221414141422141414221414221414221414141414141422141422141414221414141422221414141422141414221414221414221414141414141422141422141414221414141422221414141422141414221414221414222222222222141422141422141414221414141422221414141422141414221414221414141414141414141422141422141414221414141422221414141422141414221414221414141414141414141422141422141414221414141422221414141422141414221414222222222222222222222222141422141414221414141422221414141422141414221414141414141414141414141414141414141414221414141422221414141422141414221414141414141414141414141414141414141414221414141422221414141422141414222222222222222222222222222222222222141414221414141422221414141422141414141414141414141414141414141414141414141414221414141422221414141422141414141414141414141414141414141414141414141414221414141422221414141422141414141414141414141414141414141414141414141414221414141422221414141422222222222222222222222222222222222222222222222222221414141422221414141414141414141414141414141414141414141414141414141414141414141422221414141414141414141414141414141414141414141414141414141414141414141422221414141414141414141414141414141414141414141414141414141414141414262622222714141414141414141414141414141414141414141414141414141414141414261722222222222222222222222222222222222222222222222222222222222222222222222222`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 
2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 
2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 
2 . . . . 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 . . . . 2 
2 . . . . 2 . . . 2 . . . . . . . . . . . . . . . . 2 . . . 2 . . . . 2 
2 . . . . 2 . . . 2 . . . . . . . . . . . . . . . . 2 . . . 2 . . . . 2 
2 . . . . 2 . . . 2 . . 2 . . 2 2 2 2 2 2 2 2 2 . . 2 . . . 2 . . . . 2 
2 . . . . 2 . . . 2 . . 2 . . . . . . . . . . 2 . . 2 . . . 2 . . . . 2 
2 . . . . 2 . . . 2 . . 2 . . . . . . . . . . 2 . . 2 . . . 2 . . . . 2 
2 . . . . 2 . . . 2 . . 2 . . 2 2 2 2 2 2 . . 2 . . 2 . . . 2 . . . . 2 
2 . . . . 2 . . . 2 . . 2 . . 2 . . . . 2 . . 2 . . 2 . . . 2 . . . . 2 
2 . . . . 2 . . . 2 . . 2 . . 2 . . . . 2 . . 2 . . 2 . . . 2 . . . . 2 
2 . . . . 2 . . . 2 . . 2 . . 2 . . . . . . . 2 . . 2 . . . 2 . . . . 2 
2 . . . . 2 . . . 2 . . 2 . . 2 . . . . . . . 2 . . 2 . . . 2 . . . . 2 
2 . . . . 2 . . . 2 . . 2 . . 2 2 2 2 2 2 . . 2 . . 2 . . . 2 . . . . 2 
2 . . . . 2 . . . 2 . . 2 . . . . . . . . . . 2 . . 2 . . . 2 . . . . 2 
2 . . . . 2 . . . 2 . . 2 . . . . . . . . . . 2 . . 2 . . . 2 . . . . 2 
2 . . . . 2 . . . 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 . . . 2 . . . . 2 
2 . . . . 2 . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 
2 . . . . 2 . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 
2 . . . . 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 . . . . 2 
2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 
2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 
2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 
2 . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile4,sprites.castle.tileDarkGrass3,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight0,sprites.dungeon.hazardLava1,sprites.dungeon.floorLight2,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.dungeon.stairLadder,sprites.dungeon.stairLarge,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.floorDark0,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.builtin.crowd0,sprites.builtin.crowd3,sprites.builtin.brick,sprites.castle.tilePath8,myTiles.tile5,sprites.dungeon.collectibleInsignia,sprites.dungeon.greenOuterNorth1,myTiles.tile6,sprites.dungeon.darkGroundNorth,sprites.dungeon.floorLight5,sprites.dungeon.chestClosed],
            TileScale.Sixteen
        ))
    }
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
    scene.cameraFollowSprite(mySprite)
    spawnSword(1)
    spawnEnemy(enemyNumber)
    spawnGems(gemNumber)
    info.startCountdown(levelTime)
}
function spawnGems (数字: number) {
    for (let index = 0; index < 数字; index++) {
        gemSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
        if (level == 0) {
            tiles.placeOnRandomTile(gemSprite, sprites.castle.tilePath5)
        } else if (level == 1) {
            tiles.placeOnRandomTile(gemSprite, sprites.castle.tilePath5)
        } else if (level == 2) {
            tiles.placeOnRandomTile(gemSprite, sprites.dungeon.darkGroundCenter)
        } else {
            tiles.placeOnRandomTile(gemSprite, sprites.dungeon.floorLight2)
        }
        gems.push(gemSprite)
    }
}
function spawnEnemy (数字: number) {
    for (let index = 0; index < 数字; index++) {
        enemySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        enemies.push(enemySprite)
        if (level == 0) {
            tiles.placeOnRandomTile(enemySprite, sprites.castle.tilePath5)
        } else if (level == 1) {
            tiles.placeOnRandomTile(enemySprite, sprites.castle.tilePath5)
        } else if (level == 2) {
            tiles.placeOnRandomTile(enemySprite, sprites.dungeon.darkGroundCenter)
        } else {
            tiles.placeOnRandomTile(enemySprite, sprites.dungeon.floorLight2)
        }
        resetSpriteSpeed(enemySprite)
    }
}
function resetSpriteSpeed (spriteToReset: Sprite) {
    speedX = 0
    speedY = 0
    while (speedX == 0 && speedY == 0) {
        speedY = Math.randomRange(-1, 1)
        speedX = Math.randomRange(-1, 1)
    }
    speedX = speedX * 50
    speedY = speedY * 50
    spriteToReset.setVelocity(speedX, speedY)
}
function destroyAllGem () {
    for (let 值2 of gems) {
        值2.destroy()
    }
}
let speedY = 0
let speedX = 0
let enemySprite: Sprite = null
let gemSprite: Sprite = null
let levelTime = 0
let gemNumber = 0
let enemyNumber = 0
let swordSprite: Sprite = null
let level = 0
let gems: Sprite[] = []
let enemies: Sprite[] = []
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`, SpriteKind.Player)
enemies = sprites.allOfKind(SpriteKindLegacy.Enemy)
gems = sprites.allOfKind(SpriteKindLegacy.Food)
let war = sprites.allOfKind(SpriteKindLegacy.sword)
info.setLife(3)
controller.moveSprite(mySprite)
info.setScore(0)
level = 0
setLevelMap(level)
game.onUpdateInterval(500, function () {
    for (let enemySprite2 of enemies) {
        if (enemySprite2.vx == 0) {
            if (enemySprite2.vy == 0) {
                resetSpriteSpeed(enemySprite2)
            }
        }
    }
})
forever(function () {
    if (mySprite.vx < 0) {
        mySprite.setImage(img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`)
    } else if (mySprite.vx > 0) {
        mySprite.setImage(img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`)
    }
})
forever(function () {
    music.playMelody("C G C G C G C G ", 120)
})
forever(function () {
    music.playMelody("E E B B C5 C5 B - ", 120)
})
forever(function () {
    music.playMelody("C5 A C5 A B C5 A - ", 240)
})
