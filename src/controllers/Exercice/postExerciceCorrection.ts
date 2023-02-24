
import { Request, Response, RequestHandler } from 'express'

const postExerciceCorrection: RequestHandler = async (req: Request, res: Response,next:any) => {
    try{
        //console.log(req.body)
        let exercice = req.body;
        // chercher la function tri dans le code de l'exercice

        function estTrie(tableau: []) {
            for (let i = 0; i < tableau.length - 1; i++) {
              if (tableau[i] > tableau[i + 1]) {
                return false;
              }
            }
            return true;
          }

        const functionName = "tri"; // le nom de la fonction à récupérer

        const functionRegex = new RegExp(`function\\s+${functionName}\\s*\\(`); // Crée une expression régulière pour rechercher la définition de la fonction
const functionExists = functionRegex.test(exercice.code); // Teste si la chaîne de caractères contient la fonction

if (functionExists) {
  const triFunction = new Function(exercice.code + `; return ${functionName};`)(); // Crée une fonction à partir de la chaîne de caractères et récupère la fonction tri

  const tableauTest = [4, 2, 6, 1, 3, 5]; // tableau de test
  const tableauTrie = triFunction(tableauTest); // appel de la fonction tri avec le tableau de test

  if (estTrie(tableauTrie)) {
  } else {
    return res.status(400).json({status: 400,message: `Le tableau trié ${tableauTrie} n'est pas trié. Vérifiez votre code.`});
  }
} else {
  return res.status(400).json({status: 400,message: `La fonction '${functionName}' n'existe pas dans le code. Vérifiez votre code. `});
}
        
        
        
        return res.status(200).json({status: 200,message: 'Exercice réussi bravo'})
    }catch (err) {
        console.log(err);
        next(err)
    }
}

export default postExerciceCorrection;
