
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class BanqueCriteria extends BaseCriteria {

    public id: number;
    public code: string;
    public codeLike: string;
    public label: string;
    public labelLike: string;
    public nom: string;
    public nomLike: string;
    public numeroCompte: string;
    public numeroCompteLike: string;
     public solde: number;
     public soldeMin: number;
     public soldeMax: number;

}
