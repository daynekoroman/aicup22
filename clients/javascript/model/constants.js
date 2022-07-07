const Obstacle = require.main.require('./model/obstacle');
const SoundProperties = require.main.require('./model/sound-properties');
const WeaponProperties = require.main.require('./model/weapon-properties');
/**
 * Non changing game state
 */
class Constants {
    /**
     * Number of ticks per game second
     */
    ticksPerSecond;
    /**
     * Starting number of units in each team
     */
    teamSize;
    /**
     * Initial zone radius
     */
    initialZoneRadius;
    /**
     * Speed of zone radius
     */
    zoneSpeed;
    /**
     * Damage dealt to units outside of the zone per second
     */
    zoneDamagePerSecond;
    /**
     * Unit spawning time
     */
    spawnTime;
    /**
     * Damage dealt to units trying to spawn in incorrect position per second
     */
    spawnCollisionDamagePerSecond;
    /**
     * Time required to perform looting actions (in seconds)
     */
    lootingTime;
    /**
     * Number of bot players (teams)
     */
    botPlayers;
    /**
     * Units' radius
     */
    unitRadius;
    /**
     * Max units' health
     */
    unitHealth;
    /**
     * Health automatically restored per second
     */
    healthRegenerationPerSecond;
    /**
     * Time until automatic health regeneration since last health damage (in seconds)
     */
    healthRegenerationDelay;
    /**
     * Max value of unit's shield
     */
    maxShield;
    /**
     * Initial value of unit's shield
     */
    spawnShield;
    /**
     * Initial number of extra lives for units
     */
    extraLives;
    /**
     * Zone radius after which respawning is disabled
     */
    lastRespawnZoneRadius;
    /**
     * Units' field of view without aiming (in degrees)
     */
    fieldOfView;
    /**
     * Units' view distance
     */
    viewDistance;
    /**
     * Whether units' view is blocked by obstacles
     */
    viewBlocking;
    /**
     * Unit rotation speed without aiming (degrees per second)
     */
    rotationSpeed;
    /**
     * Units' movement speed while spawning
     */
    spawnMovementSpeed;
    /**
     * Max unit speed when walking forward
     */
    maxUnitForwardSpeed;
    /**
     * Max unit speed when walking backward
     */
    maxUnitBackwardSpeed;
    /**
     * Max unit acceleration
     */
    unitAcceleration;
    /**
     * Whether a unit can damage units of the same team
     */
    friendlyFire;
    /**
     * Score given for killing enemy unit
     */
    killScore;
    /**
     * Score multiplier for damaging enemy units
     */
    damageScoreMultiplier;
    /**
     * Score given for every team killed before you
     */
    scorePerPlace;
    /**
     * List of properties of every weapon type
     */
    weapons;
    /**
     * Starting weapon with which units spawn, or None
     */
    startingWeapon;
    /**
     * Ammo for starting weapon given when unit spawns
     */
    startingWeaponAmmo;
    /**
     * Max number of shield potions in unit's inventory
     */
    maxShieldPotionsInInventory;
    /**
     * Amount of shield restored using one potion
     */
    shieldPerPotion;
    /**
     * Time required to perform action of using shield potion
     */
    shieldPotionUseTime;
    /**
     * List of properties of every sound type
     */
    sounds;
    /**
     * Sound type index when moving (starting with 0), or None
     */
    stepsSoundTypeIndex;
    /**
     * Distance when steps sound will be 100% probability
     */
    stepsSoundTravelDistance;
    /**
     * List of obstacles on the map
     */
    obstacles;

    constructor(ticksPerSecond, teamSize, initialZoneRadius, zoneSpeed, zoneDamagePerSecond, spawnTime, spawnCollisionDamagePerSecond, lootingTime, botPlayers, unitRadius, unitHealth, healthRegenerationPerSecond, healthRegenerationDelay, maxShield, spawnShield, extraLives, lastRespawnZoneRadius, fieldOfView, viewDistance, viewBlocking, rotationSpeed, spawnMovementSpeed, maxUnitForwardSpeed, maxUnitBackwardSpeed, unitAcceleration, friendlyFire, killScore, damageScoreMultiplier, scorePerPlace, weapons, startingWeapon, startingWeaponAmmo, maxShieldPotionsInInventory, shieldPerPotion, shieldPotionUseTime, sounds, stepsSoundTypeIndex, stepsSoundTravelDistance, obstacles) {
        this.ticksPerSecond = ticksPerSecond;
        this.teamSize = teamSize;
        this.initialZoneRadius = initialZoneRadius;
        this.zoneSpeed = zoneSpeed;
        this.zoneDamagePerSecond = zoneDamagePerSecond;
        this.spawnTime = spawnTime;
        this.spawnCollisionDamagePerSecond = spawnCollisionDamagePerSecond;
        this.lootingTime = lootingTime;
        this.botPlayers = botPlayers;
        this.unitRadius = unitRadius;
        this.unitHealth = unitHealth;
        this.healthRegenerationPerSecond = healthRegenerationPerSecond;
        this.healthRegenerationDelay = healthRegenerationDelay;
        this.maxShield = maxShield;
        this.spawnShield = spawnShield;
        this.extraLives = extraLives;
        this.lastRespawnZoneRadius = lastRespawnZoneRadius;
        this.fieldOfView = fieldOfView;
        this.viewDistance = viewDistance;
        this.viewBlocking = viewBlocking;
        this.rotationSpeed = rotationSpeed;
        this.spawnMovementSpeed = spawnMovementSpeed;
        this.maxUnitForwardSpeed = maxUnitForwardSpeed;
        this.maxUnitBackwardSpeed = maxUnitBackwardSpeed;
        this.unitAcceleration = unitAcceleration;
        this.friendlyFire = friendlyFire;
        this.killScore = killScore;
        this.damageScoreMultiplier = damageScoreMultiplier;
        this.scorePerPlace = scorePerPlace;
        this.weapons = weapons;
        this.startingWeapon = startingWeapon;
        this.startingWeaponAmmo = startingWeaponAmmo;
        this.maxShieldPotionsInInventory = maxShieldPotionsInInventory;
        this.shieldPerPotion = shieldPerPotion;
        this.shieldPotionUseTime = shieldPotionUseTime;
        this.sounds = sounds;
        this.stepsSoundTypeIndex = stepsSoundTypeIndex;
        this.stepsSoundTravelDistance = stepsSoundTravelDistance;
        this.obstacles = obstacles;
    }

    /**
     * Read Constants from input stream
     */
    static async readFrom(stream) {
        let ticksPerSecond;
        ticksPerSecond = await stream.readDouble();
        let teamSize;
        teamSize = await stream.readInt();
        let initialZoneRadius;
        initialZoneRadius = await stream.readDouble();
        let zoneSpeed;
        zoneSpeed = await stream.readDouble();
        let zoneDamagePerSecond;
        zoneDamagePerSecond = await stream.readDouble();
        let spawnTime;
        spawnTime = await stream.readDouble();
        let spawnCollisionDamagePerSecond;
        spawnCollisionDamagePerSecond = await stream.readDouble();
        let lootingTime;
        lootingTime = await stream.readDouble();
        let botPlayers;
        botPlayers = await stream.readInt();
        let unitRadius;
        unitRadius = await stream.readDouble();
        let unitHealth;
        unitHealth = await stream.readDouble();
        let healthRegenerationPerSecond;
        healthRegenerationPerSecond = await stream.readDouble();
        let healthRegenerationDelay;
        healthRegenerationDelay = await stream.readDouble();
        let maxShield;
        maxShield = await stream.readDouble();
        let spawnShield;
        spawnShield = await stream.readDouble();
        let extraLives;
        extraLives = await stream.readInt();
        let lastRespawnZoneRadius;
        lastRespawnZoneRadius = await stream.readDouble();
        let fieldOfView;
        fieldOfView = await stream.readDouble();
        let viewDistance;
        viewDistance = await stream.readDouble();
        let viewBlocking;
        viewBlocking = await stream.readBool();
        let rotationSpeed;
        rotationSpeed = await stream.readDouble();
        let spawnMovementSpeed;
        spawnMovementSpeed = await stream.readDouble();
        let maxUnitForwardSpeed;
        maxUnitForwardSpeed = await stream.readDouble();
        let maxUnitBackwardSpeed;
        maxUnitBackwardSpeed = await stream.readDouble();
        let unitAcceleration;
        unitAcceleration = await stream.readDouble();
        let friendlyFire;
        friendlyFire = await stream.readBool();
        let killScore;
        killScore = await stream.readDouble();
        let damageScoreMultiplier;
        damageScoreMultiplier = await stream.readDouble();
        let scorePerPlace;
        scorePerPlace = await stream.readDouble();
        let weapons;
        weapons = [];
        for (let weaponsCount = await stream.readInt(); weaponsCount > 0; weaponsCount--) {
            let weaponsElement;
            weaponsElement = await WeaponProperties.readFrom(stream);
            weapons.push(weaponsElement);
        }
        let startingWeapon;
        if (await stream.readBool()) {
            startingWeapon = await stream.readInt();
        } else {
            startingWeapon = null;
        }
        let startingWeaponAmmo;
        startingWeaponAmmo = await stream.readInt();
        let maxShieldPotionsInInventory;
        maxShieldPotionsInInventory = await stream.readInt();
        let shieldPerPotion;
        shieldPerPotion = await stream.readDouble();
        let shieldPotionUseTime;
        shieldPotionUseTime = await stream.readDouble();
        let sounds;
        sounds = [];
        for (let soundsCount = await stream.readInt(); soundsCount > 0; soundsCount--) {
            let soundsElement;
            soundsElement = await SoundProperties.readFrom(stream);
            sounds.push(soundsElement);
        }
        let stepsSoundTypeIndex;
        if (await stream.readBool()) {
            stepsSoundTypeIndex = await stream.readInt();
        } else {
            stepsSoundTypeIndex = null;
        }
        let stepsSoundTravelDistance;
        stepsSoundTravelDistance = await stream.readDouble();
        let obstacles;
        obstacles = [];
        for (let obstaclesCount = await stream.readInt(); obstaclesCount > 0; obstaclesCount--) {
            let obstaclesElement;
            obstaclesElement = await Obstacle.readFrom(stream);
            obstacles.push(obstaclesElement);
        }
        return new Constants(ticksPerSecond, teamSize, initialZoneRadius, zoneSpeed, zoneDamagePerSecond, spawnTime, spawnCollisionDamagePerSecond, lootingTime, botPlayers, unitRadius, unitHealth, healthRegenerationPerSecond, healthRegenerationDelay, maxShield, spawnShield, extraLives, lastRespawnZoneRadius, fieldOfView, viewDistance, viewBlocking, rotationSpeed, spawnMovementSpeed, maxUnitForwardSpeed, maxUnitBackwardSpeed, unitAcceleration, friendlyFire, killScore, damageScoreMultiplier, scorePerPlace, weapons, startingWeapon, startingWeaponAmmo, maxShieldPotionsInInventory, shieldPerPotion, shieldPotionUseTime, sounds, stepsSoundTypeIndex, stepsSoundTravelDistance, obstacles);
    }

    /**
     * Write Constants to output stream
     */
    async writeTo(stream) {
        let ticksPerSecond = this.ticksPerSecond;
        await stream.writeDouble(ticksPerSecond);
        let teamSize = this.teamSize;
        await stream.writeInt(teamSize);
        let initialZoneRadius = this.initialZoneRadius;
        await stream.writeDouble(initialZoneRadius);
        let zoneSpeed = this.zoneSpeed;
        await stream.writeDouble(zoneSpeed);
        let zoneDamagePerSecond = this.zoneDamagePerSecond;
        await stream.writeDouble(zoneDamagePerSecond);
        let spawnTime = this.spawnTime;
        await stream.writeDouble(spawnTime);
        let spawnCollisionDamagePerSecond = this.spawnCollisionDamagePerSecond;
        await stream.writeDouble(spawnCollisionDamagePerSecond);
        let lootingTime = this.lootingTime;
        await stream.writeDouble(lootingTime);
        let botPlayers = this.botPlayers;
        await stream.writeInt(botPlayers);
        let unitRadius = this.unitRadius;
        await stream.writeDouble(unitRadius);
        let unitHealth = this.unitHealth;
        await stream.writeDouble(unitHealth);
        let healthRegenerationPerSecond = this.healthRegenerationPerSecond;
        await stream.writeDouble(healthRegenerationPerSecond);
        let healthRegenerationDelay = this.healthRegenerationDelay;
        await stream.writeDouble(healthRegenerationDelay);
        let maxShield = this.maxShield;
        await stream.writeDouble(maxShield);
        let spawnShield = this.spawnShield;
        await stream.writeDouble(spawnShield);
        let extraLives = this.extraLives;
        await stream.writeInt(extraLives);
        let lastRespawnZoneRadius = this.lastRespawnZoneRadius;
        await stream.writeDouble(lastRespawnZoneRadius);
        let fieldOfView = this.fieldOfView;
        await stream.writeDouble(fieldOfView);
        let viewDistance = this.viewDistance;
        await stream.writeDouble(viewDistance);
        let viewBlocking = this.viewBlocking;
        await stream.writeBool(viewBlocking);
        let rotationSpeed = this.rotationSpeed;
        await stream.writeDouble(rotationSpeed);
        let spawnMovementSpeed = this.spawnMovementSpeed;
        await stream.writeDouble(spawnMovementSpeed);
        let maxUnitForwardSpeed = this.maxUnitForwardSpeed;
        await stream.writeDouble(maxUnitForwardSpeed);
        let maxUnitBackwardSpeed = this.maxUnitBackwardSpeed;
        await stream.writeDouble(maxUnitBackwardSpeed);
        let unitAcceleration = this.unitAcceleration;
        await stream.writeDouble(unitAcceleration);
        let friendlyFire = this.friendlyFire;
        await stream.writeBool(friendlyFire);
        let killScore = this.killScore;
        await stream.writeDouble(killScore);
        let damageScoreMultiplier = this.damageScoreMultiplier;
        await stream.writeDouble(damageScoreMultiplier);
        let scorePerPlace = this.scorePerPlace;
        await stream.writeDouble(scorePerPlace);
        let weapons = this.weapons;
        await stream.writeInt(weapons.length);
        for (let weaponsElement of weapons) {
            await weaponsElement.writeTo(stream);
        }
        let startingWeapon = this.startingWeapon;
        if (startingWeapon === null) {
            await stream.writeBool(false);
        } else {
            await stream.writeBool(true);
            await stream.writeInt(startingWeapon);
        }
        let startingWeaponAmmo = this.startingWeaponAmmo;
        await stream.writeInt(startingWeaponAmmo);
        let maxShieldPotionsInInventory = this.maxShieldPotionsInInventory;
        await stream.writeInt(maxShieldPotionsInInventory);
        let shieldPerPotion = this.shieldPerPotion;
        await stream.writeDouble(shieldPerPotion);
        let shieldPotionUseTime = this.shieldPotionUseTime;
        await stream.writeDouble(shieldPotionUseTime);
        let sounds = this.sounds;
        await stream.writeInt(sounds.length);
        for (let soundsElement of sounds) {
            await soundsElement.writeTo(stream);
        }
        let stepsSoundTypeIndex = this.stepsSoundTypeIndex;
        if (stepsSoundTypeIndex === null) {
            await stream.writeBool(false);
        } else {
            await stream.writeBool(true);
            await stream.writeInt(stepsSoundTypeIndex);
        }
        let stepsSoundTravelDistance = this.stepsSoundTravelDistance;
        await stream.writeDouble(stepsSoundTravelDistance);
        let obstacles = this.obstacles;
        await stream.writeInt(obstacles.length);
        for (let obstaclesElement of obstacles) {
            await obstaclesElement.writeTo(stream);
        }
    }
}
module.exports = Constants