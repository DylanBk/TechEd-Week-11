import chalk from "chalk";

class Player {
    name: string;
    health: number;
    weapon: Weapon;

    constructor(name: string) {
        this.name = name;

        this.health = 100;
        this.weapon = new Fists;
    };

    attack (enemy: Enemy, weapon: Weapon) {
        enemy.health -= weapon.damage;

        switch (weapon.type) {
            case 'blade':
                console.log(`${chalk.blue(this.name)} slices ${chalk.red(enemy.name)} with ${chalk.blue(weapon.name)}, dealing ${chalk.yellow(weapon.damage)} damage`);
                break;
            case 'axe':
                console.log(`${chalk.blue(this.name)} swings ${chalk.red(weapon.name)}, dealing ${chalk.yellow(weapon.damage)} damage`);
                break;
            case 'bow':
                console.log(`${chalk.blue(this.name)} shoots ${chalk.red(enemy.name)} with ${chalk.blue(weapon.name)}, dealing ${chalk.yellow(weapon.damage)} damage`);
                break;
            default:
                console.log(`${chalk.blue(this.name)} attacks ${chalk.red(enemy.name)} with ${chalk.blue(weapon.name)}, dealing ${chalk.yellow(weapon.damage)} damage`);
        };
    };
};

class Weapon {
    name: string;
    type: string | null;
    damage: number;

    constructor(name: string, type: string | null, damage: number) {
        this.name = name;
        this.type = type;
        this.damage = damage;
    };
};

class Fists extends Weapon {
    constructor () {
        super('Fists', null, 20);
    };
};

class Sword extends Weapon {
    constructor () {
        super('Broadsword', 'blade', 40);
    };
};

class Dagger extends Weapon {
    constructor () {
        super('Dagger', 'blade', 30);
    };
};


class Enemy {
    name: string;
    type: string;
    health: number;
    weapon: Weapon;

    constructor (name: string, type: string, health: number, weapon: Weapon) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.weapon = weapon;
    };

    attack (player: Player, weapon: Weapon) {
        player.health -= weapon.damage;

        switch (weapon.type) {
            case 'blade':
                console.log(`${chalk.red(this.name)} slices you with ${chalk.red(weapon.name)}, dealing ${chalk.red(weapon.damage)} damage`);
                break;
            case 'axe':
                console.log(`${chalk.red(this.name)} swings ${chalk.red(weapon.name)}, dealing ${chalk.red(weapon.damage)} damage`);
                break
            case 'bow':
                console.log(`${chalk.red(this.name)} shoots you with ${chalk.red(weapon.name)}, dealing ${chalk.red(weapon.damage)} damage`);
                break;
            default:
                console.log(`${chalk.red(this.name)} attacks you with ${chalk.red(weapon.name)}, dealing ${chalk.red(weapon.damage)} damage`);
                break;
            };
    };
};

class Goblin extends Enemy {
    constructor () {
        super('Scout', 'orc', 50, new Dagger);
    };
};


const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const main = async () => {
    const p1 = new Player('Dylan');
    const e1 = new Enemy('Goblin', 'orc', 50, new Dagger);

    console.log(`${chalk.blue(p1.name)} encounters a ${chalk.red(e1.name)}\n`);

    while (p1.health > 0 && e1.health > 0) {
        p1.attack(e1, p1.weapon);

        if (e1.health <= 0) {
            console.log(`\n${chalk.red(e1.name)} has been defeated!\n`);
            break;
        };

        await sleep(1000);

        e1.attack(p1, e1.weapon);

        if (p1.health <= 0) {
            console.log(`\n${chalk.blue(p1.name)} has been defeated!\n`);
            break;
        };

        await sleep(1000);
    };
};

main();