// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "leveldungeon":
            case "leveldungeon1":return tiles.createTilemap(hex`10001000001f222200001f00000000000000000000000024200022001f1f202121242400000000201f002400220000000000000000000000240000001f1f20202323242420282900201f2200000000000000000026282900000021211f211f1f1f212400111617141c0a000e0e0e100000002400121819151c0a01270205100000002000131b1a001e0a0b0403051000000021001e0d1d1d040a07060f08100000001f00030520060600090909090c000000220000002100000000000000000000002200212121001f00000000000000000021002000000022000000000000000000200022001f201f222121202120282824000020000000000000000000000028000000`, img`
. 2 2 2 . . 2 . . . . . . . . . 
. . . 2 2 . 2 . 2 2 2 2 2 2 2 . 
. . . 2 2 . 2 . 2 . . . . . . . 
. . . . 2 . . . 2 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 . . . . . . . . . 
. 2 2 . . . 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . 2 . . . 2 . 
. . . . . . . . . . 2 . . . 2 . 
. . . . 2 . 2 . . . 2 . . . 2 . 
2 2 . . 2 . 2 . . . 2 . . . 2 . 
2 2 2 2 2 . 2 2 2 2 2 . . . 2 . 
. . 2 . . . . . . . . . . . 2 . 
2 2 2 . 2 2 . . . . . . . . 2 . 
2 . . . 2 . . . . . . . . . 2 . 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenSwitchUp,sprites.dungeon.greenSwitchDown,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest2,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.stairLarge,sprites.dungeon.floorLight2,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight3,sprites.dungeon.floorMixed,sprites.dungeon.floorDark3,sprites.dungeon.floorDark1,myTiles.tile1,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.floorLight5,sprites.dungeon.floorDarkDiamond], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTilebrokenglass":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
