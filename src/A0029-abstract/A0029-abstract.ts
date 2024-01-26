export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected firstname: string,
    protected attack: number,
    protected life: number,
  ) {}

  public characterAttack(character: Character): void {
    this.bordao();
    character.loseLife(this.attack);
  }

  public loseLife(forceAttack: number): void {
    this.life -= forceAttack;
    console.log(`${this.emoji} ${this.firstname} agora tem ${this.life} de vida...`);
  }

  public abstract bordao(): void;
}

class Guerreira extends Character {
  protected emoji = '\u{1F9DD}';

  public bordao(): void {
    console.log(this.emoji + 'Guerreiraaaa aoooo ataaaqueee!!!');
  }
}
class Monstro extends Character {
  protected emoji = '\u{1F9DF}';

  public bordao(): void {
    console.log(this.emoji + 'Monstro Atacaaaaaaar!!!');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.characterAttack(monstro);
guerreira.characterAttack(monstro);
guerreira.characterAttack(monstro);

console.log();
monstro.characterAttack(guerreira);
monstro.characterAttack(guerreira);
monstro.characterAttack(guerreira);
