import NumberFlow from '@number-flow/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
const plans = [
  {
    id: 'hobby',
    name: 'Ngày',
    price: {
      monthly: '',
      yearly: '',
    },
    description:
      'Trải nghiệm bao nhiêu tính bấy nhiêu',
    features: [
      '1.500đ / hình',
      'Tạo ảnh',
      'Tải ảnh',
      'Hỗ trợ cơ bản',
      '',
      '',
      ''
    ],
    cta: 'Đăng ký ngay',
  },
  {
    id: 'pro',
    name: 'Tuần',
    price: {
      monthly: '',
      yearly: '',
    },
    description: 'Bạn cần để đầu tư vào cửa hàng của mình.',
    features: [
      '1.500đ / hình',
      'Tạo ảnh',
      'Tải ảnh',
      'Lưu ảnh tạm',
      'Hỗ trợ cơ bản',
      '',
      '',
    ],
    cta: 'Đăng ký ngay',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Tháng',
    price: {
      monthly: '',
      yearly: '',
    },
    description: 'Chuyên nghiệp cho doanh nghiệp của bạn.',
    features: [
      'Tạo ảnh',
      'Tải ảnh',
      'Lưu ảnh tạm',
      'Tự động hóa quy trình xuất bản',
      'Hỗ trợ ưu tiên',
      'Custom theo yêu cầu',
      ''
    ],
    cta: 'Liên hệ',
  },
];
const Pricing = () => {
  const [frequency, setFrequency] = useState<string>('monthly');
  return (
    <div className="not-prose flex flex-col gap-16 px-8 py-24 text-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="mb-0 text-balance font-medium text-5xl tracking-tighter!">
          Đơn giản, minh bạch, dễ hiểu
        </h1>
        <p className="mx-auto mt-0 mb-0 max-w-2xl text-balance text-lg text-muted-foreground">
          Quản lý doanh nghiệp đã đủ khó rồi — vậy tại sao không làm cho cuộc sống của bạn dễ dàng hơn?
          Các gói giá của chúng tôi đơn giản, minh bạch và có thể mở rộng cùng bạn.
        </p>
        {/* <Tabs defaultValue={frequency} onValueChange={setFrequency}>
          <TabsList>
            <TabsTrigger value="monthly">Thanh toán theo tháng</TabsTrigger>
            <TabsTrigger value="yearly">
              Theo năm
              <Badge variant="secondary">20% off</Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs> */}
        <div className="mt-8 grid w-full max-w-4xl gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              className={cn(
                'relative w-full text-left grid grid-row-3',
                plan.popular && 'ring-2 ring-primary'
              )}
              key={plan.id}
            >
              {plan.popular && (
                <Badge className="-translate-x-1/2 -translate-y-1/2 absolute top-0 left-1/2 rounded-full">
                  Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="font-medium text-xl">
                  {plan.name}
                </CardTitle>
                {/* <CardDescription>
                  <p>{plan.description}</p>
                  {typeof plan.price[frequency as keyof typeof plan.price] ===
                    'number' ? (
                    <NumberFlow
                      className="font-medium text-foreground"
                      format={{
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 0,
                      }}
                      suffix={`/month, billed ${frequency}.`}
                      value={
                        plan.price[
                        frequency as keyof typeof plan.price
                        ] as number
                      }
                    />
                  ) : (
                    <span className="font-medium text-foreground">
                      {plan.price[frequency as keyof typeof plan.price]}.
                    </span>
                  )}
                </CardDescription> */}
              </CardHeader>
              <CardContent className="grid gap-2">
                {plan.features.map((feature, index) => (
                  <div
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                    key={index}
                  >
                    {feature != '' ? <BadgeCheck className="h-4 w-4" /> : <div className='h-2'></div>}
                    {feature}
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? 'default' : 'secondary'}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Pricing;