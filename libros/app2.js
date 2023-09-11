function dividirCadenaPorSaltosDeLinea(cadena) {
    const trozos = cadena.split('\n\n');
    return trozos;
  }
  
  const texto = `Chapter 9: I'll give you flowers:
  I'm sorry, Anya.
  I'm sorry, Chloe.
  I'm sorry, Runoa.
  Sorry, Ryu.
  Sorry ...... Mia.
  "............"
  Freya, sitting on her stone throne, closed her eyes tightly and furrowed her brow.
  She put one hand against her forehead, unpleasant feelings seeping out from the
  list of words echoing directly in her head and the voice that sounded one after
  another.
  (Are you dreaming again?)
  A man and a woman who acted as escorts around her peered at her worriedly, but
  now even responding to them felt troublesome.
  The dead girl (Syr) - no, the other girl (Horn) was looking at the "dream".
  With the help of 『Transformation Magic』 only secret method (Warner Saide),
  Freya and Horn would share five senses. Horn was still in a state of
  unconsciousness from the initiation of magic, so Freya would feel the "dream
  world" she saw from time to time like this.
  The vision was still dark. But her 『apology』 was echoing in her hearing.
  On Horn's side, 'emotional reflux' occurs when the goddess gets emotional, but it
  is not possible for this to happen on Freya's side. Freya was not aware of Horn's
  thoughts and ideas, but only received the 'information' that came through. And
  now, it was a 'murmur' that was particularly unpleasant to her.
  If Horn chased after the goddess' emotions and said these 『apologies』 in her
  own dreams, then Horn could be considered as Freya's mirror.
  She even fished up the residual thoughts of the girl Freya should have killed and
  put them in broad daylight.
  (What an ugly mirror ......)
  If even the 『dreams』 seen in the abyss of slumber were a collection of memories
  and emotions, then Freya couldn't peer into Horn's dreams. She knew that the
  vision was blocked, dimmed, and the young girl was still sleeping.
  The touch of liquid came from her cheek, probably tears running down from her eyes.
  Freya had long since stopped caring about the war games whose trend was a
  foregone conclusion, and she suppressed the sound that rang out from the inside
  of her body as if she had an unbearable headache - and just then.
  "!!!"
  Freya jerked her body to her feet.
  She moved so swiftly that she acted nothing like a queen.
  The guards were taken aback, while she opened her silver pupils wide.
  "...... F, Freya-sama?"
  "What's wrong with you--"
  "Tell Hedin to get it over with."
  The goddess's voice interrupted the two men's questions.
  She looked at the familia members who had stopped moving with a sharp gaze
  and ordered so.
  "Pass on my command to end this war game immediately!
  "Yes, yes, yes!
  The Lord God had hardly ever shouted like this, and the two guards, a man and a
  woman, held their breath and their bodies trembled.`;
  
  const trozos = dividirCadenaPorSaltosDeLinea(texto);
  console.log(trozos);
  