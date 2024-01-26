// Padrão de projeto da Singleton - GOF | Factory Method - GOF

export class Database {
  private static db: Database;

  constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  public connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  public static getDatabase(host: string, user: string, password: string): Database {
    if (Database.db) {
      console.log('Retornando instância já criada.');
      return Database.db;
    }
    console.log('Criando nova instância.');
    Database.db = new Database(host, user, password);
    return Database.db;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

const db3 = Database.getDatabase('localhost', 'root', '123456');
db3.connect();

const db4 = Database.getDatabase('localhost', 'root', '123456');
db4.connect();
