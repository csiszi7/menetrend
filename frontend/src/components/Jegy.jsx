import React from 'react'
import busz from '../../public/images/busz.png'


const Jegy = () => {

  return (
   <div>
    <br />
    <br /> 
    <p>
      VÁSÁROLJA MEG JEGYÉT ONLINE! 
      <br />
      Belföldi és nemzetközi menetjegyét online is megvásárolhatja ezen a weboldalon vagy a MÁV applikációkban. Az online vásárlás nem csupán kényelmesebb és gyorsabb, de bizonyos díjtermékek esetén olcsóbb is, mint az automatából vagy a jegypénztárból vásárolva. Azonos felhasználói fiókkal a böngészőben megvásárolt jegyek a MÁV és MÁV+ app-ban is elérhetők.
    </p>
    <form action="#"> 
   <select name="Közlekedési eszközök" id="kozeszk"> 
    <option value="vasut">Vasút</option> 
    <option value="busz">Busz</option> 
    <option value="hev">Hév</option> 
    </select> <br />

    <label htmlFor="honnan">Honnan</label>
    <input type="text" name="Honnan" id="honnan" />
    <br />

    <label htmlFor="eritnve">Érintve</label>
    <input type="text" name="Érintve" id="eritnve" />
    <br />

    <label htmlFor="hova">Hova</label>
    <input type="text" name="Hova" id="hova" />
    <br />

    

    
    <p>odaút időpontja</p>
    <label htmlFor="hanykor">Mikor?</label>
    <input type="date" id="hanykor" name="appt" /> Hánykor?{" "}
    <input type="time" name="Mikor?" id="mikor" />
    <br />

    <p>visszaút időpontja</p>
    Mikor?<input type="date" id="hanykor_vissza" name="appt" />Hánykor? {" "}
    <input type="time" name="Mikor?" id="mikor_vissza" />
    <br />

    <label htmlFor="klimas">Csak klímás járattal</label>
    <input type="checkbox" name="klimas" id="klimas" />
    <br />

    <label htmlFor="helyjegy">Csak helyjegyet szeretnék</label>
    <input type="checkbox" name="helyjegy" id="helyjegy" />
    <br />

    <button name="+Utas" id="+utas">+ Utas</button>
    <button type="reset">Törlés</button>
    <button name="keres" id="keres">Keresés</button>
  </form>
  
</div>
  )
}

export default Jegy
