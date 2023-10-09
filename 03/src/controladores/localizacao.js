const { buscarEndereco } = require("utils-playground");
const { readFile, writeFile } = require("fs/promises");

const gerenciamentoEnderecos = async (req, res) => {
    const {cep} = req.params;
    
  try {

    const enderecos = JSON.parse( await readFile('./03/src/enderecos.json'))
    
    let endereco = enderecos.find(endereco => endereco.cep.replace('-','')=== cep)
    if(endereco){
      return res.json(endereco);
    }
      endereco = await buscarEndereco(cep);
      if(endereco.erro){
        return res.status(400).json({message:`Endereço não localizado`});
      }
      enderecos.push(endereco);
      await writeFile('./03/src/enderecos.json', JSON.stringify(enderecos));
      return res.json(endereco);
  } catch (error) {
    return res
      .status(400)
      .json({ message: `${error}` });
  } 
};

module.exports = {gerenciamentoEnderecos}
