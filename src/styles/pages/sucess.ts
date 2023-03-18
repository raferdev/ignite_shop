import { styled } from '..'

export const SucessContainer = styled('main',{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    margin:'0 auto',
    height: 450,
    width:300,

    h1: {
        fontSize:'$2xl',
        color:'#gray300',
        marginBottom:'1rem',
    },

    p: {
        fontSize:'$xl',
        color:'$gray300',
        maxWidth:300,
        textAlign:'center',
        lineHeight:'1.4',
        marginTop:'2rem',
    },

    a: {
        display:'block',
        fontSize:'$lg',
        color:'$green500',
        textDecoration:'none',
        marginTop:'4rem',

        '&:hover':{
            color:'$green300'
        }
    }


})

export const ImageContainer = styled('div',{
    width:'100%',
    maxWidth: 120,
    height: 145,
    background:'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding:'0.25rem',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',

    img: {
        objectFit:'cover',
    }
})