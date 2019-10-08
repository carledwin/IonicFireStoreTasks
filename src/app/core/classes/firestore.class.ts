import { AngularFirestore, AngularFirestoreCollection, QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export abstract class Firestore<T extends {id: string}> {

    protected angularFirestoreCollection: AngularFirestoreCollection<T>;

    constructor(protected angularFirestoreDB: AngularFirestore){}

    protected setCollection(path: string, queryFn?: QueryFn): void {

        this.angularFirestoreCollection = path ? this.angularFirestoreDB.collection(path, queryFn) : null;
    }

    getAll(): Observable<T[]> {

        return this.angularFirestoreCollection.valueChanges();
    }

    get(id: string) {

        return this.angularFirestoreCollection.doc<T>(id).valueChanges();
    }

    private setItem(item: T, operation: 'set' | 'update'): Promise<T> {

        return this.angularFirestoreCollection
        .doc<T>(item.id)
        [operation](item)
        .then(() => item);
    }

    create(item: T): Promise<T> {

        item.id = this.angularFirestoreDB.createId();

        return this.setItem(item, 'set');
    }

    update(item: T): Promise<T> {

        return this.setItem(item, 'update');
    }

    delete(item: T): Promise<void> {

        return this.angularFirestoreCollection.doc<T>(item.id).delete();
    }
}
