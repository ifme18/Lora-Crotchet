import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import { Card, CardBody, CardHeader, Image, Button, Chip, Divider }  from "@heroui/react";
import { Heart, Users, Award, Globe, HandHeart, Scissors } from "lucide-react";

export default function DocsPage() {
  const impactStats = [
    { number: "500+", label: "Lives Touched", icon: Heart },
    { number: "200+", label: "Disabled Individuals Empowered", icon: HandHeart },
    { number: "15", label: "Communities Served", icon: Globe },
    { number: "50+", label: "Local Artisans Trained", icon: Users }
  ];

  const programs = [
    {
      title: "Therapeutic Crocheting",
      description: "Specialized programs for individuals with disabilities, providing therapeutic benefits through creative expression and skill development.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      benefits: ["Motor Skills", "Mental Health", "Social Connection"]
    },
    {
      title: "Community Workshops",
      description: "Free workshops teaching crocheting skills to community members, fostering creativity and providing income opportunities.",
      image: "https://images.unsplash.com/photo-1586281010553-d4bbf8b8109a?w=400&h=300&fit=crop",
      benefits: ["Skill Building", "Income Generation", "Community Bonding"]
    },
    {
      title: "Adaptive Tools Program",
      description: "Creating and distributing specialized crocheting tools designed for people with physical limitations.",
      image: "https://images.unsplash.com/photo-1594736797933-d0601ba2fe65?w=400&h=300&fit=crop",
      benefits: ["Accessibility", "Independence", "Inclusion"]
    }
  ];

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 dark:from-purple-900/20 dark:via-pink-900/10 dark:to-blue-900/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative flex flex-col items-center justify-center gap-6 py-16 md:py-24 px-4">
          <div className="text-center max-w-4xl">
            <Chip 
              color="secondary" 
              variant="flat" 
              className="mb-4"
              startContent={<Heart className="w-4 h-4" />}
            >
              Community-Based Organization
            </Chip>
            <h1 className={`${title({ size: "lg" })} mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent`}>
              Lora Crochets
            </h1>
            <p className={`${subtitle()} mb-8 text-gray-600 dark:text-gray-300`}>
              Weaving threads of hope, creativity, and empowerment through the art of crocheting. 
              Supporting disabled individuals and communities one stitch at a time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                color="primary" 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500"
                startContent={<HandHeart className="w-5 h-5" />}
              >
                Join Our Mission
              </Button>
              <Button 
                variant="bordered" 
                size="lg"
                startContent={<Users className="w-5 h-5" />}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform duration-300">
                <CardBody className="py-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                      <stat.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${title({ size: "md" })} mb-8`}>Our Mission</h2>
          <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-none shadow-xl">
            <CardBody className="p-8">
              <div className="flex justify-center mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=300&fit=crop&crop=faces"
                  alt="Lora - Founder"
                  className="rounded-full"
                  width={120}
                  height={120}
                />
              </div>
              <blockquote className="text-xl text-gray-700 dark:text-gray-200 italic leading-relaxed">
                "Every stitch we make is a step towards inclusion, every pattern we teach 
                opens doors to independence, and every community we touch becomes stronger 
                through the power of creative expression and shared purpose."
              </blockquote>
              <p className="mt-6 text-gray-600 dark:text-gray-300 font-semibold">
                - Lora, Founder & Community Leader
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`${title({ size: "md" })} mb-4`}>Our Programs</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive initiatives designed to empower, educate, and uplift our community 
              through the therapeutic and creative art of crocheting.
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-0">
                  <Image
                    src={program.image}
                    alt={program.title}
                    className="w-full object-cover rounded-lg"
                    height={200}
                  />
                </CardHeader>
                <CardBody className="px-6 py-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <Divider className="my-4" />
                  <div className="flex flex-wrap gap-2">
                    {program.benefits.map((benefit, i) => (
                      <Chip 
                        key={i} 
                        size="sm" 
                        color="secondary" 
                        variant="flat"
                        className="text-xs"
                      >
                        {benefit}
                      </Chip>
                    ))}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`${title({ size: "md" })} mb-4`}>Community Impact</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real stories, real change, real hope.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardBody className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30">
                    <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                      Empowering Independence
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Through our adaptive crocheting programs, individuals with disabilities 
                      have gained new skills, confidence, and economic opportunities. Many 
                      participants now sell their beautiful creations, achieving financial 
                      independence they never thought possible.
                    </p>
                  </div>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=250&fit=crop"
                  alt="Community workshop"
                  className="rounded-lg"
                  width="100%"
                  height={200}
                />
              </CardBody>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardBody className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <Scissors className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                      Building Stronger Communities
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Our workshops have become gathering places where people from all walks 
                      of life come together, share stories, and support each other. We've 
                      created a network of caring individuals who continue to help one 
                      another long after the workshops end.
                    </p>
                  </div>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=250&fit=crop"
                  alt="Crocheting hands"
                  className="rounded-lg"
                  width="100%"
                  height={200}
                />
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardBody className="p-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
              <p className="text-xl mb-8 text-purple-100">
                Every thread matters. Every stitch counts. Every person deserves 
                the chance to create, contribute, and belong.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  color="default"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                  startContent={<Heart className="w-5 h-5" />}
                >
                  Volunteer With Us
                </Button>
                <Button 
                  size="lg" 
                  variant="bordered" 
                  className="border-white text-white hover:bg-white/10"
                  startContent={<Users className="w-5 h-5" />}
                >
                  Make a Donation
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}