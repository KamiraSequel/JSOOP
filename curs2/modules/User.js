class User{
    _varsta; // protected
    #email; //  protected
    constructor(id, nume, email, varsta){
        this.id = id;
        this.nume = nume;
        this.#email = email;
        this._varsta = varsta;
    }

    get myMail(){
        console.log('Sunt in getter email');
        return this.#email;
    }

    set myMail(emailNou){
        console.log('Sunt in setter email');
        if(emailNou == 'morgul@morgul.ro'){
            this.#email = emailNou;
        }

        else{
            throw 'Error: invalid data!';
        }
        
    }

    get myAge(){
        return this._varsta;
    }

    set myAge(varstaNoua){
        if(varstaNoua > 0){
            this._varsta = varstaNoua;
        }
        else{
            throw 'Error: invalid data!';
        }
    }

    mananca (calorii){
        console.log(`Mananca ${calorii}calorii pe zi.`);
    }

    doarme(ore){
        console.log(`Doarme ${ore}ore pe zi`);
    }
}
export {User}