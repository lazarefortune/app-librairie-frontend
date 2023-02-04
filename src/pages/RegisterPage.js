const RegisterPage = () => {

    return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h3>Inscription</h3>
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <p>
                                    Prêt à rejoindre notre communauté ? Inscrivez-vous dès maintenant !
                                </p>
                            </div>
                            <form className="text-start">
                                <div className="form-group mb-2">
                                    <label htmlFor="name">Nom</label>
                                    <input type="text" className="form-control" id="name" placeholder="Entrez votre nom" />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Entrez votre email" />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="password">Mot de passe</label>
                                    <input type="password" className="form-control" id="password" placeholder="Entrez votre mot de passe" />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="password2">Confirmation du mot de passe</label>
                                    <input type="password" className="form-control" id="password2" placeholder="Répétez votre mot de passe" />
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" value="" id="terms" />
                                    <label className="form-check-label" htmlFor="terms">
                                        J'accepte les <a href="#">conditions générales d'utilisation</a>
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-success btn-toolbar mt-3">Créer mon compte</button>
                            </form>
                        </div>
                        <div className="card-text">
                            <p>Vous avez déjà un compte ? <a href="/login">Connectez-vous</a></p>
                        </div>
                    </div>
                </div>
            </div>
    )

}

export default RegisterPage