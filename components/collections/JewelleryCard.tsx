export default function JewelleryCard({

product

}:any){


return(

<div
className="
group
"
>

<img

src={product.image}

className="
w-full
aspect-square
object-cover
transition duration-700
group-hover:scale-105
"

/>


<div
className="
mt-5
"
>

<h3
className="
font-serif
text-xl
"
>

{product.name}

</h3>


<p>
{product.metal}
</p>


<p>
{product.stone}
</p>


</div>


</div>


)

}