import * as React from 'react';
import { Button, View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// importando as descrição dos produtos da oferta
import VestidoFem from '../Produdos/ofertas/vestidoF'
import ConjuntoFem from '../Produdos/ofertas/conjuntoF'
import BlazerMasc from '../Produdos/ofertas/blazerM'


// importando as descrição dos produtos da moda masculina
import JaquetMascS from '../Produdos/Masculino/jacketMasc'
import BlusDMalhaMasc from '../Produdos/Masculino/blusaMalhMasc'
import RelogioMasc from '../Produdos/Masculino/relogioMasc';

// importando as descrição dos produtos da moda feminina
import MoletonFem from '../Produdos/Feminino/moletonF'
import CamizaoFem from '../Produdos/Feminino/camizaoF'
import BolsaFem from '../Produdos/Feminino/bolsaF'









import containers from '../estilos/estilo';



const imageLinkDestaque = require('../img/destaqueR.jpg')
const imageLinkModaMasculina = require('../img/masculinaR.jpg')
const imageLinkModaFeminina = require('../img/modaFemininaR.jpg')
const imageLinkRedeSociais = require('../img/redes.png')
const imageLinkCartoes = require('../img/bandeirasCartoest_1.png')
const imageMenuPrincipal = require('../img/Menu.png')
const imagePesquisa = require('../img/pesquisa.png')
const login = require('../img/Login.png')



function HomeScreen({ navigation }) {
  return (

    <ScrollView>


      <View style={[containers.alinhamentoVertical, containers.containerSecundarios, containers.estiloLogin]}>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Text style={[containers.coresTextoTitulos, containers.estiloLogoMarca]}>BAZZAAR</Text>
          </TouchableOpacity>
        </View>


        <View >
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Details')}>
            <ImageBackground source={imagePesquisa} style={{ width: 40, height: 40, marginLeft: 10 }}>

            </ImageBackground>
        </TouchableOpacity>
         
        </View>

       
       
       
        <View >
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Details')}>
            <ImageBackground source={imageMenuPrincipal} style={{ width: 65, height: 40, marginLeft: 10 }}>

            </ImageBackground>
        </TouchableOpacity>
         
        </View>


      </View>



      <View style={containers.containerSecundarios} >
        <TouchableOpacity onPress={() => navigation.navigate('ofertas')}
        >

          <ImageBackground source={imageLinkDestaque} style={{ width: '100%', height: 150, flexDirection: 'row', justifyContent: 'space-between' }}>


            <View  >
              <Text style={containers.testoTituloLinkProdutos}>Principais </Text>
              <Text style={containers.testoTituloLinkProdutos}>     Ofertas</Text>
            </View>


            <View style={{ marginTop: '30%' }} >
              <Text style={containers.testoTituloLinkProdutos}>50% OFF </Text>

            </View>

          </ImageBackground>
        </TouchableOpacity>
      </View>


      <View style={containers.containerSecundarios}>
        <TouchableOpacity onPress={() => navigation.navigate('modaM')}
        >
          <ImageBackground source={imageLinkModaMasculina} style={{ width: '100%', height: 150 }}>
            <View style={{ marginTop: '30%' }}>
              <Text style={[containers.testoTituloLinkProdutos, containers.textosCentralizados]}>moda masculina</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={[containers.containerSecundarios]}>
        <TouchableOpacity onPress={() => navigation.navigate('modaF')}
        >
          <ImageBackground source={imageLinkModaFeminina} style={{ width: '100%', height: 150, }}>
            <View style={{ marginTop: '28%' }}>
              <Text style={{ fontSize: 30, fontWeight: '700', textAlign: 'center', color: '#1e90ff', textShadow: 1, textShadowColor: 'black' }}>moda feminina</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={containers.containerDaRedeECartoes}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontSize: 14, color: 'white', marginLeft: 10 }}>Siga nos</Text>
          </View>

          <View>
            <Text style={{ fontSize: 14, color: 'white', textAlign: 'right',marginRight:10 }}>Aceitamos todos cartões</Text>
          </View>
        </View>

        <View style={containers.alinhamentoVertical}>


          <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('Details')}
          >
            <ImageBackground source={imageLinkRedeSociais} style={{ height: 50, margin: 5 }}>

            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('Details')}
          >
            <ImageBackground source={imageLinkCartoes} style={{ height: 50, margin: 5 }}>

            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
}






function DetailsScreen({ navigation }) {
  return (
    <View>
    
    </View>
  );
}





const Stack = createNativeStackNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        
        <Stack.Screen name="ofertas" component={Ofertas} /> 
        <Stack.Screen name="vestidoFOferta" component={VestidoFOferta} /> 
        <Stack.Screen name="conjuntoFOferta" component={ConjuntoFOfertas} /> 
        <Stack.Screen name='blazerMasculino' component ={BlazerMasculino}/>

        <Stack.Screen name="modaM" component={ModaMasculina} />
        <Stack.Screen name="blusaDeMalhaM" component={BlusaDeMalhaM}/> 
        <Stack.Screen name="jaquetaSarjaM"component={JaquetSarja}/>
        <Stack.Screen name='relogioMasc' component={RelogMasc}/>
        
        <Stack.Screen name="modaF" component={ModaFeminina} />
        <Stack.Screen name="moletomFeminino" component={MoletomF}/>
        <Stack.Screen name="camisaoFeminino" component={CamisaoF}/>
        <Stack.Screen name="bolsaFeminina" component={BolsaF}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Home;




/** Conteudo que sera chamado ao clicar em moda masculina */


const blaze = require('../img/imgProdDestaques/blaze.jpg')
const shortBlusa = require('../img/imgProdDestaques/shortBlusa.jpg')
const vestido = require('../img/imgProdDestaques/vestido.jpg')



function Ofertas({navigation}) {
    return (
        <ScrollView>
            <View style={containers.containerSecundarios}>
                <TouchableOpacity onPress={()=> navigation.navigate('vestidoFOferta')}>
                    <ImageBackground source={vestido} style={{ width: '100%', height: 165 }}>
                        <View style={{ marginTop: '20%' }}>
                        <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>Vestido:</Text>
                            <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>R$ 200,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={[containers.containerSecundarios]}>
                <TouchableOpacity  onPress={()=> navigation.navigate('conjuntoFOferta')}>
                    <ImageBackground source={shortBlusa} style={{ width: '100%', height: 165, }}>
                        <View style={{ marginTop: '20%' }}>
                           
                            <Text style={{marginLeft:10, textAlign:'left',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>Conjunto:</Text>
                            <Text style={{marginLeft:10, textAlign:'left',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>R$ 200,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={[containers.containerSecundarios]}>
                <TouchableOpacity  onPress={()=> navigation.navigate('blazerMasculino')}>
                    <ImageBackground source={blaze} style={{ width: '100%', height: 165, }}>
                        <View style={{ marginTop: '20%' }}>
                        <Text style={{marginLeft:10, textAlign:'left',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>Blazer:</Text>
                            <Text style={{marginLeft:10, textAlign:'left',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>R$ 200,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

function VestidoFOferta() {
  return(
    <View>
      <VestidoFem></VestidoFem>
    </View>
  )
  
}

function ConjuntoFOfertas () {
  return(
    <View>
      <ConjuntoFem></ConjuntoFem>
    </View>
  )
  
}

function BlazerMasculino () {
  return(
    <View>
      <BlazerMasc></BlazerMasc>
    </View>
  )
  
}



/** Conteudo que sera chamado ao clicar em moda masculina */

const blusaMalha = require('../img/modaMasculina/blusaMalha.jpg');
const jaquetaSarja = require('../img/modaMasculina/jaquetaSarja.jpg');

const relogio = require('../img/modaMasculina/Relogio.jpg');






function ModaMasculina({navigation}){
    
        return(
            <ScrollView >
                
                
                 <View style={containers.containerSecundarios}>
                     
                <TouchableOpacity onPress={() => navigation.navigate('blusaDeMalhaM')}>
                    <ImageBackground source={blusaMalha} style={{ width: '100%', height: 165 }}>
                        <View style={{ marginTop: '20%' }}>
                        <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'700',color:'white'}}>Blusa de Malha:</Text>
                            <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'700',color:'white'}}>R$ 250,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={containers.containerSecundarios}>
                <TouchableOpacity style={{backgroundColor:'white'}} onPress = {()=>navigation.navigate('jaquetaSarjaM')}>
                    <ImageBackground source={jaquetaSarja} style={{ width: '90%', height: 165 }}>
                        <View style={{ marginTop: '20%' }}>
                        <Text style={{marginRight:0, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>Jaqueta de sarja:</Text>
                            <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>R$ 300,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={containers.containerSecundarios}>
                <TouchableOpacity onPress={()=>navigation.navigate('relogioMasc')}>
                    <ImageBackground source={relogio} style={{ width: '100%', height: 165 }}>
                        <View style={{ marginTop: '20%' }}>
                        <Text style={{marginRight:0, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>Relogion MixR:</Text>
                            <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>R$ 900,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            </ScrollView>
        )
    }

function BlusaDeMalhaM() {
  return(
  <View>
    <BlusDMalhaMasc></BlusDMalhaMasc>
  </View>
  )
  
}


function JaquetSarja() {
  return(
    <View>
      <JaquetMascS></JaquetMascS>
    </View>
  )
  
}
function RelogMasc() {
  return(
    <View>
      <RelogioMasc></RelogioMasc>
    </View>
  )
  
}



    


    /** Conteudo que sera chamado ao clicar em moda feminina */


    const moleton = require('../img/modaFeminina/moleton.jpg');
const camisao = require('../img/modaFeminina/camizao.jpg');

const bolsaCouro = require('../img/modaFeminina/bolsaCouto.jpg');





function ModaFeminina({navigation}){
    
        return(
            <ScrollView>
                 <View style={containers.containerSecundarios}>
                <TouchableOpacity  onPress ={()=>navigation.navigate('moletomFeminino')} >
                    <ImageBackground source={moleton} style={{ width: '100%', height: 165 }}>
                        <View style={{ marginTop: '20%' }}>
                        <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'900',color:'white'}}>Moleton:</Text>
                            <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'900',color:'white'}}>R$ 250,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={containers.containerSecundarios}>
                <TouchableOpacity style={{backgroundColor:'white'}}  onPress ={()=>navigation.navigate('camisaoFeminino')} >
                    <ImageBackground source={camisao} style={{ width: '100%', height: 165 }}>
                        <View style={{ marginTop: '12%' }}>
                        <Text style={{marginRight:10, textAlign:'center',alignItems:'center',fontSize:20, fontWeight:'900',color:'black'}}>Camisão:</Text>
                            <Text style={{marginRight:10, textAlign:'center',alignItems:'center',fontSize:20, fontWeight:'900',color:'black'}}>R$ 300,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={containers.containerSecundarios}>
                <TouchableOpacity  onPress ={()=>navigation.navigate('bolsaFeminina')} >
                    <ImageBackground source={bolsaCouro} style={{ width: '100%', height: 165 }} >
                        <View style={{ marginTop: '20%' }}>
                        <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'900',color:'white'}}>Bolsa F:</Text>
                            <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'900',color:'white'}}>R$ 900,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            </ScrollView>
        )
    
}


function MoletomF() {
  return(
    <View>
      <MoletonFem></MoletonFem>
    </View>
  )
  
}

function CamisaoF() {
  return(
    <View>
      <CamizaoFem></CamizaoFem>
    </View>
  )
  
}
function BolsaF() {
  return(
    <View>
      <BolsaFem></BolsaFem>
    </View>
  )
  
}


  
