// Protected

export class Company {
  public readonly name: string;
  protected readonly collaborators: Collaborator[] = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  public addCollaborators(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  public showCollaborators(): void {
    this.collaborators.forEach((collaborator) => console.log(collaborator));
  }

  public getNome(): string {
    return this.name;
  }
}

export class Udemy extends Company {
  constructor() {
    super('Udemy', '11.111.111/0001/11');
  }

  public popCollaborator(): Collaborator | null {
    const collaborator = this.collaborators.pop();
    if (collaborator) return collaborator;
    return null;
  }
}

export class Collaborator {
  constructor(
    public readonly firstname: string,
    public readonly lastname: string,
  ) {}
}

const company = new Udemy();
const collaborator1 = new Collaborator('Marcelo', 'Santos');
const collaborator2 = new Collaborator('Luiz Otávio', 'Miranda');
const collaborator3 = new Collaborator('Leonado', 'Moura Leitão');

company.addCollaborators(collaborator1);
company.addCollaborators(collaborator2);
company.addCollaborators(collaborator3);
company.addCollaborators({ firstname: 'Wanderley', lastname: 'Gadelha' });

console.log(company);

console.log();
company.showCollaborators();

console.log();
console.log(company.getNome());

console.log();
console.log(company.name);

console.log();
console.log(company);

console.log();
const collaboratorRemoved = company.popCollaborator();
console.log(collaboratorRemoved);
