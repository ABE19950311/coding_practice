def janken
    a=rand(100)
    b=["susi","kare--","hamburgerrr"]
    puts a
    if a>=0 && a<30 then
        puts b[0]
    elsif a>=31 && a<70 then
        puts b[1]
    elsif a>=71 && a<101 then
        puts b[2]
    end
end

puts janken

