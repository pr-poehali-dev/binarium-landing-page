import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface DataPoint {
  time: string;
  price: number;
}

const TradingChart = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [currentPrice, setCurrentPrice] = useState(1.0850);
  const [priceChange, setPriceChange] = useState(0);
  const [isPositive, setIsPositive] = useState(true);

  useEffect(() => {
    const initialData: DataPoint[] = [];
    const now = Date.now();
    let price = 1.0850;

    for (let i = 60; i >= 0; i--) {
      const time = new Date(now - i * 1000);
      price += (Math.random() - 0.5) * 0.0002;
      initialData.push({
        time: time.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        price: parseFloat(price.toFixed(5))
      });
    }

    setData(initialData);
    setCurrentPrice(initialData[initialData.length - 1].price);

    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const lastPrice = data.length > 0 ? data[data.length - 1].price : 1.0850;
      const change = (Math.random() - 0.5) * 0.0004;
      const newPrice = parseFloat((lastPrice + change).toFixed(5));
      
      const priceChangePercent = ((newPrice - lastPrice) / lastPrice) * 100;
      setPriceChange(parseFloat(priceChangePercent.toFixed(3)));
      setIsPositive(newPrice >= lastPrice);
      
      setData(prev => {
        const updated = [...prev.slice(-59), { time: newTime, price: newPrice }];
        return updated;
      });
      setCurrentPrice(newPrice);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minPrice = Math.min(...data.map(d => d.price));
  const maxPrice = Math.max(...data.map(d => d.price));
  const priceRange = maxPrice - minPrice || 0.001;

  const getY = (price: number) => {
    return 100 - ((price - minPrice) / priceRange) * 100;
  };

  const pathData = data.map((point, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = getY(point.price);
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  const gradientPathData = `${pathData} L 100 100 L 0 100 Z`;

  return (
    <Card className="border-none shadow-xl overflow-hidden bg-gradient-to-br from-card to-card/80">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-medium text-muted-foreground">EUR/USD</span>
              <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-xs font-semibold rounded">LIVE</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">{currentPrice.toFixed(5)}</span>
              <div className={`flex items-center gap-1 text-sm font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                <Icon name={isPositive ? "TrendingUp" : "TrendingDown"} size={16} />
                <span>{isPositive ? '+' : ''}{priceChange.toFixed(3)}%</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold text-sm transition-colors flex items-center gap-2">
              <Icon name="ArrowUp" size={16} />
              ВВЕРХ
            </button>
            <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold text-sm transition-colors flex items-center gap-2">
              <Icon name="ArrowDown" size={16} />
              ВНИЗ
            </button>
          </div>
        </div>

        <div className="relative w-full h-64 bg-muted/20 rounded-lg overflow-hidden">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={isPositive ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)"} stopOpacity="0.4" />
                <stop offset="100%" stopColor={isPositive ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)"} stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {data.length > 1 && (
              <>
                <path
                  d={gradientPathData}
                  fill="url(#chartGradient)"
                />
                <path
                  d={pathData}
                  fill="none"
                  stroke={isPositive ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)"}
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                />
              </>
            )}
          </svg>

          <div className="absolute inset-0 pointer-events-none">
            {[0, 25, 50, 75, 100].map((y) => (
              <div
                key={y}
                className="absolute left-0 right-0 border-t border-border/20"
                style={{ top: `${y}%` }}
              />
            ))}
          </div>

          <div className="absolute bottom-2 left-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
            {data[0]?.time || '00:00:00'}
          </div>
          <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
            {data[data.length - 1]?.time || '00:00:00'}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-1">Максимум</div>
            <div className="text-sm font-semibold">{maxPrice.toFixed(5)}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-1">Минимум</div>
            <div className="text-sm font-semibold">{minPrice.toFixed(5)}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-1">Волатильность</div>
            <div className="text-sm font-semibold">{(priceRange * 100).toFixed(3)}%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TradingChart;
