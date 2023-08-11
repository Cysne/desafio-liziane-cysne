class CaixaDaLanchonete {

  calcularValorDaCompra(formaDePagamento, itens) {
      const cardapio = {
          cafe: 3,
          chantily: 1.5,
          suco: 6.2,
          sanduiche: 6.5,
          queijo: 2,
          salgado: 7.25,
          combo1: 9.5,
          combo2: 7.5
      };

      if (itens.length === 0) {
          return "Não há itens no carrinho de compra!";
      }
      
      let total = 0;
      let hasCafe = false;
      let hasSanduiche = false;

      for (const itemInfo of itens) {
          const [item, quantidade] = itemInfo.split(",");

          if(item === "chantily" && !hasCafe || item === "queijo" && !hasSanduiche) {
              return "Item extra não pode ser pedido sem o principal"
          }

          if (!cardapio.hasOwnProperty(item)) {
              return "Item inválido!";
          }

          const precoItem = cardapio[item];

          if (quantidade <= 0) {
              return "Quantidade inválida!";
          }

          if(item == "cafe") hasCafe = true;
          if(item == "sanduiche") hasSanduiche = true;

          total += precoItem * quantidade;
      }

      if (formaDePagamento === "dinheiro") {
          total = total * 0.95;
      } else if (formaDePagamento === "credito") {
          total = total * 1.03;
      } else if (formaDePagamento === "debito") {
          total = total;
      } else {
          return "Forma de pagamento inválida!";
      }

      return `R$ ${total.toFixed(2).toString().replace(".", ",")}`;
  }

}

export { CaixaDaLanchonete };
