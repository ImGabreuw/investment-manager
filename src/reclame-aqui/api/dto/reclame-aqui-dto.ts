import { DTO } from "../../../domain/dto";

class ReclameAquiDTO implements DTO {
  "Nota do Reclame Aqui": number;
  "Nota do consumidor": number;
  "Reclamações": number;
  "Respondidas": number;
  "Voltariam a fazer negócio": number;
  "Índice de solução": number;
}

export { ReclameAquiDTO };
