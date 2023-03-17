import { styled } from '..'

export const SucessContainer = styled('main',{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    margin:'0 auto',
    height: 656,

    h1: {
        fontSize:'$2xl',
        color:'#gray300'
    },

    p: {
        fontSize:'$xl',
        color:'$gray300',
        maxWidth:560,
        textAlign:'center',
        lineHeight:'1.4'
    },

    a: {
        marginTop:'5rem',
        display:'block',
        fontSize:'$lg',
        color:'$green500',
        textDecoration:'none',

        '&:hover':{
            color:'$green300'
        }
    }


})

export const ImageContainer = styled('div',{
    width:'100%',
    maxWidth: 130,
    height: 145,
    marginTop:'4rem',
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