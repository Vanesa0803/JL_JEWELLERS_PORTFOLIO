export default function CollectionHero({
title,
subtitle,
image
}:{
title:string;
subtitle:string;
image:string;
}){


return(

<section
className="
relative
h-[80vh]
flex
items-center
justify-center
overflow-hidden
"
>


<img

src={image}

className="
absolute
w-full
h-full
object-cover
"
/>


<div
className="
relative
z-10
text-center
text-white
"
>

<h1
className="
text-5xl
md:text-7xl
font-serif
tracking-wide
"
>

{title}

</h1>


<p
className="
mt-6
max-w-xl
text-lg
"
>

{subtitle}

</p>


</div>


</section>

)

}